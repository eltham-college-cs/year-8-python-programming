// A small Python highlighter shared by the code editor and static code blocks.

export type Token = { type: 'kw' | 'bi' | 'str' | 'num' | 'com' | 'name' | 'text'; text: string };

const KEYWORDS = new Set([
  'and', 'as', 'break', 'continue', 'def', 'elif', 'else', 'False', 'for', 'from', 'if',
  'import', 'in', 'is', 'None', 'not', 'or', 'pass', 'return', 'True', 'try', 'except', 'while',
]);
const BUILTINS = new Set(['print', 'input', 'int', 'str', 'float', 'len', 'range', 'abs', 'round', 'append']);

const PATTERN =
  /(#[^\n]*)|("(?:[^"\\\n]|\\.)*"?|'(?:[^'\\\n]|\\.)*'?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)|(\s+|[^\sA-Za-z0-9_#"']+)/g;

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  for (const m of code.matchAll(PATTERN)) {
    const [text, com, str, num, word] = m;
    if (com) tokens.push({ type: 'com', text });
    else if (str) tokens.push({ type: 'str', text });
    else if (num) tokens.push({ type: 'num', text });
    else if (word) {
      const after = code.slice((m.index ?? 0) + text.length).match(/^\s*\(/);
      if (KEYWORDS.has(word)) tokens.push({ type: 'kw', text });
      else if (BUILTINS.has(word) && after) tokens.push({ type: 'bi', text });
      else tokens.push({ type: 'name', text });
    } else tokens.push({ type: 'text', text });
  }
  return tokens;
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function highlightHtml(code: string): string {
  return tokenize(code)
    .map((t) => (t.type === 'text' ? escape(t.text) : `<span class="tok-${t.type}">${escape(t.text)}</span>`))
    .join('');
}
