// The error decoder. Each entry explains one error message in plain English.
// `match` is tested against "ErrorType: message" from Python; the first match wins,
// so keep specific entries above general ones.

export type ErrorEntry = {
  id: string;
  /** The year this error is first likely to appear. */
  year: 7 | 8;
  name: string;
  /** What Python prints (shortened). */
  looksLike: string;
  match: RegExp;
  meaning: string;
  broken: string;
  fixed: string;
  check: string[];
};

export const errors: ErrorEntry[] = [
  {
    id: 'typeerror-join-number',
    year: 7,
    name: 'Joining text and a number with +',
    looksLike: 'TypeError: can only concatenate str (not "int") to str',
    match: /TypeError: can only concatenate str \(not "int"\) to str/,
    meaning:
      'You used + to join some text and a number. + can add two numbers, or join two pieces of text, but it cannot mix them. Remember that input() always gives you text.',
    broken: 'age = input()\nprint(age + 10)',
    fixed: 'age = int(input())\nprint(age + 10)',
    check: [
      'Doing maths? Turn the text into a number with int() first.',
      'Joining a number onto a sentence? Use str(number), or use a comma instead of +.',
    ],
  },
  {
    id: 'typeerror-number-and-text',
    year: 7,
    name: 'Doing maths with text',
    looksLike: "TypeError: unsupported operand type(s) for -: 'str' and 'int'",
    match: /TypeError: unsupported operand type\(s\) for .*'(str|int)' and '(str|int)'/,
    meaning:
      'One side of the sum is text, not a number. This usually means you forgot int() around input().',
    broken: 'money = input()\nprint(money - 2)',
    fixed: 'money = int(input())\nprint(money - 2)',
    check: ['Find every input() that should be a number and wrap it in int().'],
  },
  {
    id: 'typeerror-compare-text-number',
    year: 8,
    name: 'Comparing text with a number',
    looksLike: "TypeError: '>' not supported between instances of 'str' and 'int'",
    match: /TypeError: '[<>=]+' not supported between instances of '(str|int)' and '(str|int)'/,
    meaning:
      'You asked whether some text is bigger or smaller than a number. Python cannot compare the two. The text almost always came from input().',
    broken: 'mark = input()\nif mark >= 50:\n    print("Pass")',
    fixed: 'mark = int(input())\nif mark >= 50:\n    print("Pass")',
    check: ['Wrap input() in int() when you need a number.'],
  },
  {
    id: 'typeerror-repeat-text',
    year: 7,
    name: 'Multiplying text gives a strange answer',
    looksLike: '12 * 2 prints 1212',
    match: /^$/,
    meaning:
      'Not an error message, but a classic surprise: "12" * 2 repeats the text and gives 1212. The value is still text because it came from input().',
    broken: 'age = input()\nprint(age * 2)',
    fixed: 'age = int(input())\nprint(age * 2)',
    check: ['If a number looks doubled up, check for a missing int().'],
  },
  {
    id: 'valueerror-int',
    year: 7,
    name: "int() can't turn this into a number",
    looksLike: "ValueError: invalid literal for int() with base 10: 'seven'",
    match: /ValueError: invalid literal for int\(\)/,
    meaning:
      'int() can only convert text that looks like a whole number, such as "12". It cannot convert words like "seven", decimals like "2.5", or an empty answer.',
    broken: 'number = int("seven")',
    fixed: 'number = int("7")',
    check: [
      'When you run the program, type digits, not words.',
      'Check you are converting the right variable.',
    ],
  },
  {
    id: 'nameerror',
    year: 7,
    name: "Python doesn't know that name",
    looksLike: "NameError: name 'Score' is not defined",
    match: /NameError: name '.*' is not defined/,
    meaning:
      "Python looked for a variable with this name and couldn't find one. Usually it is a spelling slip, a capital letter, or text that is missing its speech marks.",
    broken: 'score = 10\nprint(Score)\nprint(Hello)',
    fixed: 'score = 10\nprint(score)\nprint("Hello")',
    check: [
      'Is the name spelt exactly the same, with the same capitals, everywhere?',
      'Is it meant to be text? Then it needs speech marks.',
      'Did you create the variable before you used it?',
    ],
  },
  {
    id: 'syntaxerror-assign-backwards',
    year: 7,
    name: 'The box is on the wrong side of =',
    looksLike: 'SyntaxError: cannot assign to literal here',
    match: /SyntaxError: cannot assign to (literal|function call)/,
    meaning:
      'The variable name (the box) must go on the left of =, and the value on the right. Python always fills the box on the left.',
    broken: '"Helena" = name\ninput() = school',
    fixed: 'name = "Helena"\nschool = input()',
    check: ['Read = as "is set to": box = value.'],
  },
  {
    id: 'syntaxerror-string',
    year: 7,
    name: 'Speech marks not closed',
    looksLike: 'SyntaxError: unterminated string literal',
    match: /SyntaxError: (unterminated string literal|EOL while scanning string literal)/,
    meaning: 'A piece of text was opened with " but never closed. Every opening speech mark needs a closing one.',
    broken: 'print("Hello)',
    fixed: 'print("Hello")',
    check: ['Count the speech marks on the line. There should be an even number.'],
  },
  {
    id: 'syntaxerror-brackets',
    year: 7,
    name: 'Brackets that do not match',
    looksLike: "SyntaxError: '(' was never closed",
    match: /SyntaxError: ('\(' was never closed|unmatched '\)'|closing parenthesis)/,
    meaning:
      'Every ( needs a matching ). With int(input()) you need two closing brackets: one for input() and one for int().',
    broken: 'age = int(input()\nprint(age)',
    fixed: 'age = int(input())\nprint(age)',
    check: ['Count the ( and the ) on the line. They should match.'],
  },
  {
    id: 'syntaxerror-colon',
    year: 8,
    name: 'Missing colon',
    looksLike: "SyntaxError: expected ':'",
    match: /SyntaxError: expected ':'/,
    meaning: 'Lines that start with if, elif, else, for or while must end with a colon.',
    broken: 'if mark >= 70\n    print("Distinction")',
    fixed: 'if mark >= 70:\n    print("Distinction")',
    check: ['Look at the end of every if, elif, else, for and while line.'],
  },
  {
    id: 'syntaxerror-equals',
    year: 8,
    name: '= where you meant ==',
    looksLike: "SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?",
    match: /SyntaxError: .*Maybe you meant '=='/,
    meaning: 'One = puts a value in a box. Two == asks a question: "are these equal?" Conditions need ==.',
    broken: 'if answer = "yes":\n    print("Great")',
    fixed: 'if answer == "yes":\n    print("Great")',
    check: ['Inside if and while, use == to compare.'],
  },
  {
    id: 'syntaxerror-missing-quotes',
    year: 7,
    name: 'Text without speech marks',
    looksLike: 'SyntaxError: invalid syntax. Perhaps you forgot a comma?',
    match: /SyntaxError: invalid syntax\. Perhaps you forgot a comma\?/,
    meaning:
      'Python found several words in a row and did not know what to do with them. Usually some text is missing its speech marks.',
    broken: 'name = input(What is your name?)',
    fixed: 'name = input("What is your name?")',
    check: ['Is every piece of text inside speech marks?', 'Is there a comma between each thing in print()?'],
  },
  {
    id: 'indentationerror',
    year: 8,
    name: 'Indentation problem',
    looksLike: 'IndentationError: expected an indented block',
    match: /IndentationError/,
    meaning:
      'Indentation (the spaces at the start of a line) shows Python which lines belong inside an if, for or while. A line after a colon must be indented, and lines in the same block must line up exactly.',
    broken: 'for i in range(3):\nprint(i)',
    fixed: 'for i in range(3):\n    print(i)',
    check: ['Indent with 4 spaces after every colon.', 'Lines in the same block must start in the same column.'],
  },
  {
    id: 'syntaxerror-general',
    year: 7,
    name: "Python can't read the line",
    looksLike: 'SyntaxError: invalid syntax',
    match: /SyntaxError/,
    meaning:
      'Something on this line (or the line just before it) is not written the way Python expects. Look for a missing bracket, speech mark, comma or colon.',
    broken: 'print("Score:" score)',
    fixed: 'print("Score:", score)',
    check: ['Check the line the error points to, and the line above it.'],
  },
  {
    id: 'indexerror',
    year: 8,
    name: 'Index out of range',
    looksLike: 'IndexError: list index out of range',
    match: /IndexError/,
    meaning:
      'You asked for an item number that the list does not have. Indexes start at 0, so a list of 3 items has indexes 0, 1 and 2. There is no item 3.',
    broken: 'pets = ["dog", "cat", "fish"]\nprint(pets[3])',
    fixed: 'pets = ["dog", "cat", "fish"]\nprint(pets[2])   # or pets[-1]',
    check: ['The last index is always one less than len(list).', 'pets[-1] always gives the last item.'],
  },
  {
    id: 'vanishing-list',
    year: 8,
    name: 'The vanishing list (None)',
    looksLike: "AttributeError: 'NoneType' object has no attribute 'append'",
    match: /'NoneType' object/,
    meaning:
      'append() changes the list but does not hand anything back. Writing shopping = shopping.append("milk") replaces your list with None.',
    broken: 'shopping = ["bread"]\nshopping = shopping.append("milk")\nprint(shopping)',
    fixed: 'shopping = ["bread"]\nshopping.append("milk")\nprint(shopping)',
    check: ['Never put list = in front of list.append(...).'],
  },
  {
    id: 'zerodivisionerror',
    year: 7,
    name: 'Dividing by zero',
    looksLike: 'ZeroDivisionError: division by zero',
    match: /ZeroDivisionError/,
    meaning: 'Nothing can be divided by 0, so Python stops. Check the value you are dividing by.',
    broken: 'people = 0\nprint(12 / people)',
    fixed: 'people = 4\nprint(12 / people)',
    check: ['Which variable is 0? Where did its value come from?'],
  },
  {
    id: 'eoferror',
    year: 7,
    name: 'Asked for more input than there is',
    looksLike: 'EOFError: EOF when reading a line',
    match: /EOFError/,
    meaning:
      'The program called input() more times than the test gives answers. Either there is an extra input(), or input() is inside a loop that keeps going.',
    broken: 'name = input()\nname = input()\nprint("Hello", name)',
    fixed: 'name = input()\nprint("Hello", name)',
    check: ['Count your input() calls. Does the task ask for that many?', 'If input() is inside a loop, does the loop stop?'],
  },
  {
    id: 'never-finished',
    year: 8,
    name: "The program didn't finish",
    looksLike: "Your program didn't finish. Is something repeating forever?",
    match: /^Timeout$/,
    meaning:
      'This is an infinite loop: the loop condition never becomes False. Every loop needs a start value, a condition, and an update that moves towards the exit.',
    broken: 'count = 5\nwhile count > 0:\n    print(count)',
    fixed: 'count = 5\nwhile count > 0:\n    print(count)\n    count = count - 1',
    check: [
      'Does the body change the variable in the condition?',
      'Does it change it in the right direction?',
      'Is the update indented inside the loop?',
      'Can the condition ever be False?',
    ],
  },
];

/** Find the decoder entry for a Python error, if there is one. */
export function findError(type: string, message: string): ErrorEntry | undefined {
  const text = `${type}: ${message}`;
  return errors.find((e) => e.match.test(text));
}
