/// <reference lib="webworker" />
// Runs Python in the browser. Loaded once per page and kept alive between runs.
// If a run takes too long, the page terminates this worker and starts a new one.

const PYODIDE_URL = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/pyodide/`, self.location.origin).href;

// The runner lives in Python so that print(), input() and errors behave exactly
// as they do in a real Python program.
const RUNNER = String.raw`
import sys, json, random, traceback, builtins

class _NeedInput(BaseException):
    pass

class _TooMuchOutput(BaseException):
    pass

_LIMIT = 100_000

def _run(code, inputs, mode, seed):
    segs = []
    total = [0]

    def emit(kind, text):
        if not text:
            return
        total[0] += len(text)
        if segs and segs[-1][0] == kind:
            segs[-1][1] += text
        else:
            segs.append([kind, text])
        if total[0] > _LIMIT:
            raise _TooMuchOutput()

    class Writer:
        def write(self, s):
            emit("out", str(s))
            return len(s)
        def flush(self):
            pass

    queue = list(inputs)

    def _input(prompt=""):
        sys.stdout.flush()
        emit("prompt", str(prompt))
        if not queue:
            if mode == "run":
                raise _NeedInput()
            raise EOFError("EOF when reading a line")
        value = queue.pop(0)
        emit("in", value + "\n")
        return value

    random.seed(seed)
    g = {"__name__": "__main__", "__builtins__": builtins, "input": _input}
    old_out, old_err = sys.stdout, sys.stderr
    sys.stdout = sys.stderr = Writer()
    error = None
    need = False
    try:
        exec(compile(code, "main.py", "exec"), g)
    except _NeedInput:
        need = True
    except _TooMuchOutput:
        error = {"type": "TooMuchOutput", "message": "", "line": None}
    except SyntaxError as e:
        error = {"type": type(e).__name__, "message": e.msg or "", "line": e.lineno}
    except Exception as e:
        line = None
        for frame in traceback.extract_tb(e.__traceback__):
            if frame.filename == "main.py":
                line = frame.lineno
        error = {"type": type(e).__name__, "message": str(e), "line": line}
    finally:
        sys.stdout, sys.stderr = old_out, old_err
    return json.dumps({
        "segments": [{"kind": k, "text": t} for k, t in segs],
        "error": error,
        "needInput": need,
    })
`;

type RunMsg = { type: 'run'; id: number; code: string; inputs: string[]; mode: 'run' | 'test'; seed: number };

let ready: Promise<{ runPython: (code: string) => unknown; globals: { get: (n: string) => unknown } }> | null = null;

function load() {
  if (!ready) {
    ready = (async () => {
      const mod = await import(/* @vite-ignore */ `${PYODIDE_URL}pyodide.mjs`);
      const py = await mod.loadPyodide({ indexURL: PYODIDE_URL });
      py.runPython(RUNNER);
      return py;
    })();
  }
  return ready;
}

self.onmessage = async (event: MessageEvent<{ type: 'init' } | RunMsg>) => {
  const msg = event.data;
  try {
    const py = await load();
    if (msg.type === 'init') {
      self.postMessage({ type: 'ready' });
      return;
    }
    const run = py.globals.get('_run') as (c: string, i: string[], m: string, s: number) => string;
    const json = run(msg.code, msg.inputs, msg.mode, msg.seed);
    self.postMessage({ type: 'result', id: msg.id, result: JSON.parse(json) });
  } catch (err) {
    self.postMessage({ type: 'failed', id: msg.type === 'run' ? msg.id : -1, message: String(err) });
  }
};
