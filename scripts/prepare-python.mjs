// Serve the pinned browser runtime from the same local server as the lessons.
import { copyFileSync, mkdirSync } from 'node:fs';

const source = new URL('../node_modules/pyodide/', import.meta.url);
const target = new URL('../public/pyodide/', import.meta.url);
mkdirSync(target, { recursive: true });
for (const file of [
  'pyodide.mjs',
  'pyodide.mjs.map',
  'pyodide.asm.js',
  'pyodide.asm.wasm',
  'pyodide-lock.json',
  'python_stdlib.zip',
]) {
  copyFileSync(new URL(file, source), new URL(file, target));
}
