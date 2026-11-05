import { describe, expect, it } from 'vitest';
import { highlightHtml, tokenize } from './highlight';

describe('tokenize', () => {
  it('keeps every character', () => {
    const code = 'name = input()\nprint("Hello,", name + "!")  # hi\n';
    expect(tokenize(code).map((t) => t.text).join('')).toBe(code);
  });
  it('labels keywords, built-ins and strings', () => {
    const types = tokenize('while x < 3: print("a")').filter((t) => t.type !== 'text').map((t) => t.type);
    expect(types).toEqual(['kw', 'name', 'num', 'bi', 'str']);
  });
  it('escapes HTML', () => {
    expect(highlightHtml('a<b')).toContain('&lt;');
  });
});
