import { describe, expect, it } from 'vitest';
import { findError } from './errors';

// Messages exactly as Python 3.12 (Pyodide 0.27) prints them.
const cases: [string, string, string][] = [
  ['TypeError', 'can only concatenate str (not "int") to str', 'typeerror-join-number'],
  ['TypeError', "unsupported operand type(s) for -: 'str' and 'int'", 'typeerror-number-and-text'],
  ['TypeError', "'>=' not supported between instances of 'str' and 'int'", 'typeerror-compare-text-number'],
  ['ValueError', "invalid literal for int() with base 10: 'cat'", 'valueerror-int'],
  ['NameError', "name 'Score' is not defined", 'nameerror'],
  ['SyntaxError', "cannot assign to literal here. Maybe you meant '==' instead of '='?", 'syntaxerror-assign-backwards'],
  ['SyntaxError', "cannot assign to function call here. Maybe you meant '==' instead of '='?", 'syntaxerror-assign-backwards'],
  ['SyntaxError', "cannot assign to expression here. Maybe you meant '==' instead of '='?", 'syntaxerror-equals'],
  ['SyntaxError', "invalid syntax. Maybe you meant '==' or ':=' instead of '='?", 'syntaxerror-equals'],
  ['SyntaxError', 'unterminated string literal (detected at line 1)', 'syntaxerror-string'],
  ['SyntaxError', "'(' was never closed", 'syntaxerror-brackets'],
  ['SyntaxError', "expected ':'", 'syntaxerror-colon'],
  ['SyntaxError', 'invalid syntax. Perhaps you forgot a comma?', 'syntaxerror-missing-quotes'],
  ['SyntaxError', 'invalid syntax', 'syntaxerror-general'],
  ['IndentationError', "expected an indented block after 'if' statement on line 2", 'indentationerror'],
  ['IndexError', 'list index out of range', 'indexerror'],
  ['AttributeError', "'NoneType' object has no attribute 'append'", 'vanishing-list'],
  ['EOFError', 'EOF when reading a line', 'eoferror'],
];

describe('findError', () => {
  it.each(cases)('%s: %s', (type, message, id) => {
    expect(findError(type, message)?.id).toBe(id);
  });
});
