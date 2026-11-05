// The key words glossary. `year` is the year the word is introduced.
// Lessons list words in their `keywords` frontmatter; matching is case-insensitive
// against `term` and `aliases`.

export type KeyWord = {
  term: string;
  aliases?: string[];
  year: 7 | 8;
  meaning: string;
  example?: string;
};

export const keywords: KeyWord[] = [
  { term: 'print', aliases: ['print()', 'output'], year: 7, meaning: 'Shows something on the screen.', example: 'print("Hello")' },
  { term: 'string', aliases: ['str', 'text'], year: 7, meaning: 'A piece of text. It always has speech marks around it in your code.', example: '"Hello"   "12"' },
  { term: 'integer', aliases: ['int'], year: 7, meaning: 'A whole number, with no speech marks.', example: '7   42   -3' },
  { term: 'data type', year: 7, meaning: 'The kind of value something is, such as a string or an integer.' },
  { term: 'variable', year: 7, meaning: 'A labelled box in the computer\'s memory that holds one value at a time.', example: 'age = 12' },
  { term: 'identifier', aliases: ['variable name'], year: 7, meaning: 'The name on a variable\'s label. No spaces, and it cannot start with a number.', example: 'favourite_colour' },
  { term: 'value', year: 7, meaning: 'What is stored inside a variable.' },
  { term: 'assignment', aliases: ['='], year: 7, meaning: 'Putting a value into a variable with =. Read = as "is set to". The box goes on the left.', example: 'score = 10' },
  { term: 'input', aliases: ['input()'], year: 7, meaning: 'Asks the user to type something, waits for Enter, and gives back what they typed as a string.', example: 'name = input()' },
  { term: 'prompt', year: 7, meaning: 'The question shown to the user by input("...").', example: 'input("What is your name? ")' },
  { term: 'int()', aliases: ['int'], year: 7, meaning: 'Turns text that looks like a whole number into a real number you can do maths with.', example: 'int("15") gives 15' },
  { term: 'str()', aliases: ['str'], year: 7, meaning: 'Turns a number into text so it can be joined to other text with +.', example: 'str(15) gives "15"' },
  { term: 'type conversion', aliases: ['casting', 'conversion'], year: 7, meaning: 'Changing a value from one data type to another, for example with int() or str().' },
  { term: 'concatenation', aliases: ['joining'], year: 7, meaning: 'Joining pieces of text together with +. You must add your own spaces.', example: '"Hi " + name' },
  { term: 'operator', aliases: ['arithmetic operator'], year: 7, meaning: 'A symbol that does a calculation: + add, - subtract, * multiply, / divide.', example: '5 * 3 + 4' },
  { term: 'order of operations', aliases: ['BIDMAS'], year: 7, meaning: 'Python does brackets first, then * and /, then + and -, just like in maths.', example: '5 * 3 + 4 is 19' },
  { term: 'trace table', aliases: ['trace'], year: 7, meaning: 'A table that tracks the value of each variable, line by line, as a program runs.' },
  { term: 'comment', aliases: ['#'], year: 7, meaning: 'A note for humans that starts with #. Python ignores it.', example: '# work out the total' },
  { term: 'temporary variable', aliases: ['temp', 'swap'], year: 7, meaning: 'A spare box used to hold a value for a moment, for example when swapping two values.', example: 'temp = a' },
  { term: 'TypeError', year: 7, meaning: 'An error when a value is the wrong type for the job, such as adding text to a number.' },
  { term: 'ValueError', year: 7, meaning: 'An error when a value cannot be converted, such as int("cat").' },
  { term: 'NameError', year: 7, meaning: 'An error when Python cannot find a variable with that name.' },
  { term: 'SyntaxError', year: 7, meaning: 'An error when a line is not written the way Python expects, such as a missing bracket or speech mark.' },
  { term: 'comparison operator', aliases: ['comparison', '==', '!='], year: 8, meaning: 'Asks a True or False question: == equal, != not equal, > < >= <=.', example: 'mark >= 50' },
  { term: 'condition', year: 8, meaning: 'A question whose answer is True or False.', example: 'count > 0' },
  { term: 'Boolean', aliases: ['True', 'False'], year: 8, meaning: 'A value that is either True or False.' },
  { term: 'selection', aliases: ['if', 'elif', 'else', 'if / elif / else'], year: 8, meaning: 'Choosing which code to run with if, elif and else. Only one branch runs.' },
  { term: 'indentation', year: 8, meaning: 'The spaces at the start of a line. They show which lines are inside an if, for or while.' },
  { term: 'remainder', aliases: ['%', 'modulo'], year: 8, meaning: 'What is left over after dividing. 7 % 2 is 1. If x % 2 == 0, x is even.', example: '7 % 3 is 1' },
  { term: 'iteration', aliases: ['loop'], year: 8, meaning: 'Repeating some lines of code.' },
  { term: 'for loop', aliases: ['for'], year: 8, meaning: 'A count-controlled loop: it repeats a set number of times.', example: 'for i in range(3):' },
  { term: 'range', aliases: ['range()'], year: 8, meaning: 'Counts from a start up to, but not including, a stop. An optional third number is the step.', example: 'range(1, 4) gives 1, 2, 3' },
  { term: 'count-controlled', year: 8, meaning: 'A loop that knows in advance how many times it will run (a for loop).' },
  { term: 'condition-controlled', year: 8, meaning: 'A loop that keeps going until a condition becomes False (a while loop).' },
  { term: 'while loop', aliases: ['while'], year: 8, meaning: 'Repeats while its condition is True. The condition is checked at the top, every time round.', example: 'while count > 0:' },
  { term: 'infinite loop', year: 8, meaning: 'A loop that never stops because its condition never becomes False.' },
  { term: 'sentinel value', aliases: ['sentinel'], year: 8, meaning: 'A special value that means "I\'m done", such as "q" to quit.' },
  { term: 'validation', year: 8, meaning: 'Checking that input is sensible before using it, and asking again if it is not.' },
  { term: 'and / or', aliases: ['and', 'or'], year: 8, meaning: 'Join two conditions. and needs both to be True; or needs at least one.' },
  { term: 'nesting', aliases: ['nested'], year: 8, meaning: 'Putting one block inside another, such as an if inside a for loop.' },
  { term: 'list', year: 8, meaning: 'One variable that stores several values, in order, inside square brackets.', example: 'scores = [12, 19, 7]' },
  { term: 'item', aliases: ['element'], year: 8, meaning: 'One value inside a list.' },
  { term: 'index', year: 8, meaning: 'The position number of an item in a list. Counting starts at 0.', example: 'scores[0]' },
  { term: 'append', aliases: ['append()'], year: 8, meaning: 'Adds one item to the end of a list.', example: 'scores.append(25)' },
  { term: 'len', aliases: ['len()'], year: 8, meaning: 'Counts how many items are in a list (or letters in a string).', example: 'len(scores)' },
  { term: 'IndexError', year: 8, meaning: 'An error when you ask for an index the list does not have.' },
];

export const termSlug = (term: string) =>
  term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'symbol';

export function findKeyword(word: string): KeyWord | undefined {
  const w = word.toLowerCase();
  return keywords.find((k) => k.term.toLowerCase() === w || k.aliases?.some((a) => a.toLowerCase() === w));
}
