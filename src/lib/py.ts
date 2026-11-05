// Main-thread side of the Python worker: one worker per page, queued runs,
// and a hard timeout that replaces the worker if a program never finishes.
import { TIMEOUT_MS } from './checker-config';
import type { RunResult } from './compare';

type Pending = { id: number; resolve: (r: RunResult) => void; reject: (e: Error) => void };
type Status = 'loading' | 'ready' | 'failed';

let worker: Worker | null = null;
let readyPromise: Promise<void> | null = null;
let nextId = 1;
let chain: Promise<unknown> = Promise.resolve();
const listeners = new Set<(s: Status) => void>();
let status: Status = 'loading';

function setStatus(s: Status) {
  status = s;
  listeners.forEach((fn) => fn(s));
}

export function onStatus(fn: (s: Status) => void) {
  listeners.add(fn);
  fn(status);
  return () => listeners.delete(fn);
}

function spawn(): Promise<void> {
  worker = new Worker(new URL('../workers/pyodide.worker.ts', import.meta.url), { type: 'module' });
  setStatus('loading');
  readyPromise = new Promise<void>((resolve, reject) => {
    const w = worker!;
    const onMsg = (e: MessageEvent) => {
      if (e.data.type === 'ready') {
        w.removeEventListener('message', onMsg);
        setStatus('ready');
        resolve();
      } else if (e.data.type === 'failed') {
        w.removeEventListener('message', onMsg);
        setStatus('failed');
        readyPromise = null;
        reject(new Error(e.data.message));
      }
    };
    w.addEventListener('message', onMsg);
    w.postMessage({ type: 'init' });
  });
  return readyPromise;
}

/** Start loading Python in the background. Safe to call many times. */
export function warmUp(): Promise<void> {
  if (!readyPromise) return spawn();
  return readyPromise;
}

function runOnce(code: string, inputs: string[], mode: 'run' | 'test', seed: number): Promise<RunResult> {
  return new Promise<RunResult>((resolve, reject) => {
    warmUp().then(() => {
      const w = worker!;
      const id = nextId++;
      const p: Pending = { id, resolve, reject };
      const timer = window.setTimeout(() => {
        w.removeEventListener('message', onMsg);
        w.terminate();
        worker = null;
        readyPromise = null;
        warmUp().catch(() => {});
        p.resolve({ segments: [], error: null, timeout: true });
      }, TIMEOUT_MS);
      const onMsg = (e: MessageEvent) => {
        if (e.data.id !== id) return;
        window.clearTimeout(timer);
        w.removeEventListener('message', onMsg);
        if (e.data.type === 'result') {
          const r = e.data.result as RunResult;
          if (r.error?.type === 'TooMuchOutput') p.resolve({ segments: r.segments, error: null, timeout: true });
          else p.resolve(r);
        } else p.reject(new Error(e.data.message));
      };
      w.addEventListener('message', onMsg);
      w.postMessage({ type: 'run', id, code, inputs, mode, seed });
    }, reject);
  });
}

/**
 * Run a program. In 'run' mode, a call to input() with no queued answer stops the
 * program and returns needInput, so the page can ask and then run it again.
 * In 'test' mode, running out of input raises EOFError as real Python would.
 */
export function runPython(code: string, inputs: string[], mode: 'run' | 'test', seed = 42): Promise<RunResult> {
  const job = chain.then(() => runOnce(code, inputs, mode, seed));
  chain = job.catch(() => {});
  return job;
}
