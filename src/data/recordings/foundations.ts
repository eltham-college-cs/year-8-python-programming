import type { VideoPlan } from './types';

// Space reveals hidden blocks one at a time: left column first, then right.

export const foundations: VideoPlan[] = [
  // ---------- Lesson 1: Printing and data types ----------
  {
    year: 8, lesson: 1, clip: 'bigIdea', title: 'Printing and data types', minutes: '1–2',
    board: {
      heading: "print() is the computer's speech bubble",
      left: [
        { kind: 'code', code: 'print("Hello, Eltham College!")' },
        { kind: 'output', text: 'Hello, Eltham College!', reveal: true },
        { kind: 'points', items: ['+  add', '-  subtract', '*  multiply', '/  divide'] },
        { kind: 'big', text: '5 * 3 + 4 = ?' },
      ],
      right: [
        { kind: 'boxes', boxes: [{ name: 'string', value: '"Hello"' }, { name: 'integer', value: '12' }, { name: 'string!', value: '"12"' }] },
      ],
    },
    script: [
      { do: 'Point at print.', say: "This is print. Think of it as the computer's speech bubble. Whatever you put inside the brackets comes out on the screen." },
      { do: 'Circle both speech marks.', say: 'See these speech marks? They tell Python this is text. Programmers call a piece of text a string. Python prints everything inside the speech marks exactly as it is: every space, every capital letter, every comma.' },
      { do: 'Press Space to show the output. Underline it.', say: "And there it is on the screen. Notice the speech marks themselves don't get printed. They're just there to show Python where the text starts and stops." },
      { do: 'Point at the three boxes on the right.', say: 'Python has different kinds of data. A string is text, and it always wears speech marks. An integer is a whole number, like 12, with no speech marks.' },
      { do: 'Circle the "12" box. Pause for 3 seconds.', say: 'Now here is a trick question. Is this one a number or text? Pause the video and decide.' },
      { do: 'Write "TEXT" next to it.', say: "It's text! It has speech marks, so to Python it's just the characters one and two, not the number twelve. You can't do maths with it." },
      { do: 'Point at the list of operators.', say: 'With integers you can do maths. Plus, minus, star for multiply, and slash for divide.' },
      { do: 'Underline 5 * 3, write 15, then + 4, write 19.', say: 'Python does multiply before add, just like in maths. Five times three is fifteen, plus four is nineteen.' },
      { say: 'So: print shows things on the screen, text needs speech marks, and numbers don\'t. Now have a go at the first task.' },
    ],
  },
  {
    year: 8, lesson: 1, clip: 'predictRun', title: 'Printing and data types', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'What two lines will this print?',
      left: [
        { kind: 'code', code: 'print("Hello, Eltham College!")\nprint(5 * 3 + 4)' },
        { kind: 'blank', label: 'My prediction', lines: 2 },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'Hello, Eltham College!\n19', reveal: true }],
    },
    script: [
      { say: "Here's a program with two lines. Before we run anything, we're going to predict what it will do. That's the most important habit in programming." },
      { do: 'Point at line 1.', say: 'Line one. It\'s a print, and inside the brackets there\'s text in speech marks. So what will appear?' },
      { do: 'Pause 3 seconds. Then write "Hello, Eltham College!" in the prediction box.', say: 'Exactly the text inside the speech marks. Hello, comma, Eltham College, exclamation mark.' },
      { do: 'Point at line 2. Circle the fact there are no speech marks.', say: 'Line two is different. No speech marks. So Python won\'t print the words five times three. It will work out the sum.' },
      { do: 'Pause 3 seconds.', say: 'What do you think it will print? Pause the video if you need to.' },
      { do: 'Write 15 + 4 = 19 in the prediction box.', say: 'Multiply first: five times three is fifteen. Then add four. Nineteen.' },
      { do: 'Press Space to show the output. Tick each line.', say: 'Let\'s run it. Hello, Eltham College. Nineteen. Did you get both?' },
      { say: 'If you said 5 times 3 plus 4, look again at the speech marks. No speech marks means Python does the maths. Now press Run on the page and check.' },
    ],
  },
  {
    year: 8, lesson: 1, clip: 'fixBug', title: 'Printing and data types', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      left: [
        { kind: 'code', label: 'Broken', code: 'print(Hello, Year 8!)' },
        { kind: 'error', text: 'SyntaxError: invalid syntax.\nPerhaps you forgot a comma?', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'print("Hello, Year 8!")', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'Hello, Year 8!', reveal: true }],
    },
    script: [
      { say: "This program crashes. Let's run it, read the error, and fix it together." },
      { do: 'Press Space to show the error.', say: 'A red error. Don\'t panic: an error message is Python telling you where it got stuck. Always read the last line first.' },
      { do: 'Underline "SyntaxError".', say: 'SyntaxError means Python can\'t read the line. It isn\'t written the way Python expects.' },
      { do: 'Circle "Hello, Year 8!" in the broken code.', say: 'Python sees the words Hello and Year and 8 and has no idea what they are. It thinks they might be the names of variables. What is missing?' },
      { do: 'Pause 3 seconds. Draw speech marks at each end of the text.', say: 'Speech marks! Text always needs speech marks, one at the start and one at the end.' },
      { do: 'Press Space to show the fixed code. Then Space again for the output.', say: 'Now Python knows it\'s text, so it prints it exactly.' },
      { do: 'Point at the comma and the exclamation mark.', say: 'And notice the comma and the exclamation mark stay inside the speech marks. The checker looks at every character, so keep them exactly as they are.' },
    ],
  },

  // ---------- Lesson 2: Variables ----------
  {
    year: 8, lesson: 2, clip: 'bigIdea', title: 'Variables', minutes: '1–2',
    board: {
      heading: 'A variable is a labelled box',
      left: [
        { kind: 'code', code: 'name = "Mr Gordon"\nage = 12\ncolour = "blue"' },
        { kind: 'code', code: 'age = 13', reveal: true },
      ],
      right: [
        { kind: 'boxes', boxes: [{ name: 'name', value: '"Mr Gordon"' }, { name: 'age', value: '12' }, { name: 'colour', value: '"blue"' }] },
        { kind: 'points', items: ['my_age  ✓', 'my age  ✗  (space)', '2cool  ✗  (starts with a number)', 'Age and age are different'] },
      ],
    },
    script: [
      { say: 'Today we teach the computer to remember things. To do that we use variables.' },
      { do: 'Point at the boxes.', say: 'A variable is like a labelled box in the computer\'s memory. The label is its name. Inside is one value: some text or a number.' },
      { do: 'Circle "name" on line 1, then draw an arrow to the name box.', say: 'Line one makes a box called name and puts the text Mr Gordon inside.' },
      { do: 'Circle the = sign.', say: 'This equals sign doesn\'t mean equals like in maths. Read it as "is set to". Name is set to Mr Gordon. The box always goes on the left, the value on the right.' },
      { do: 'Point at age = 12.', say: 'Age is set to 12. No speech marks, because it\'s a number.' },
      { do: 'Press Space to show age = 13. Cross out 12 in the age box and write 13.', say: 'What if we put a new value in? The box can only hold one thing, so the 12 is thrown away and 13 goes in.' },
      { do: 'Point at the naming rules.', say: 'A few rules for names: no spaces, so use an underscore. Don\'t start with a number. And capitals matter: Age with a capital is a completely different box from age.' },
    ],
  },
  {
    year: 8, lesson: 2, clip: 'predictRun', title: 'Variables', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'What will the last line print?',
      left: [{ kind: 'code', code: 'name = "Sam"\nage = 12\nprint(name)\nprint(age)\nprint("My name is", name)' }],
      right: [
        { kind: 'boxes', boxes: [{ name: 'name', value: '' }, { name: 'age', value: '' }] },
        { kind: 'output', label: 'Output', text: 'Sam\n12\nMy name is Sam', reveal: true },
      ],
    },
    script: [
      { say: "Let's be the computer. We'll go one line at a time and keep track of the boxes." },
      { do: 'Point at line 1, write "Sam" in the name box.', say: 'Line one: name is set to Sam.' },
      { do: 'Line 2, write 12 in the age box.', say: 'Line two: age is set to 12.' },
      { do: 'Circle print(name). Draw an arrow from name to the name box.', say: 'Line three: print name. No speech marks, so Python looks inside the box called name. What does it find?' },
      { do: 'Pause 3 seconds. Write Sam beside the code.', say: 'Sam.' },
      { do: 'Line 4, write 12.', say: 'Line four prints what\'s in the age box: 12.' },
      { do: 'Circle the comma in the last line.', say: 'The last line prints some text, then a comma, then name. What will it print? Think about where the space comes from.' },
      { do: 'Pause 3 seconds. Write "My name is Sam" and draw a dot for the space.', say: 'My name is Sam. The comma adds one space for us, so we don\'t need a space inside the speech marks.' },
      { do: 'Press Space to show the output.', say: 'Three lines: Sam, 12, My name is Sam. Did your prediction match?' },
    ],
  },
  {
    year: 8, lesson: 2, clip: 'fixBug', title: 'Variables', minutes: '2–3',
    board: {
      heading: 'Fix the bugs',
      left: [
        { kind: 'code', label: 'Bug 1', code: 'score = 10\nprint(Score)' },
        { kind: 'error', text: "NameError: name 'Score' is not defined", reveal: true },
      ],
      right: [
        { kind: 'code', label: 'Bug 2', code: 'name = "Sam"\nprint("Hello", "name")' },
        { kind: 'output', label: 'Output', text: 'Hello name', reveal: true },
      ],
    },
    script: [
      { say: 'Two bugs today. One crashes, and one runs but prints the wrong thing. That second kind is sneakier.' },
      { do: 'Press Space to show the NameError. Underline "NameError".', say: 'Bug one. NameError: name Score is not defined. Python is saying: I looked for a box called Score and there isn\'t one.' },
      { do: 'Circle the s in score on line 1 and the S on line 2.', say: 'But we made a box on line one! Look closely. Line one says score with a small s. Line two says Score with a capital. To Python, those are different names.' },
      { do: 'Cross out the capital S and write a small s.', say: 'Make them match and it prints 10.' },
      { do: 'Press Space to show the output of bug 2.', say: 'Bug two doesn\'t crash. It prints Hello name. But we wanted Hello Sam.' },
      { do: 'Circle the speech marks around name.', say: 'Speech marks mean "print exactly this word". So Python prints the word name. Take the speech marks off and Python looks inside the box instead.' },
      { do: 'Cross out the speech marks.', say: 'Now it prints Hello Sam. Remember: speech marks for the word itself, no speech marks for what\'s inside the box.' },
    ],
  },

  // ---------- Lesson 3: Input and conversion ----------
  {
    year: 8, lesson: 3, clip: 'bigIdea', title: 'Input and conversion', minutes: '1–2',
    board: {
      heading: 'input() is a waiter. int() is a currency exchange.',
      left: [{ kind: 'flow', typed: '15' }, { kind: 'code', code: 'age = input()\nage = int(age)', reveal: true }],
      right: [],
    },
    script: [
      { say: 'Until now our programs have done the same thing every time. Today we teach the computer to listen.' },
      { do: 'Point at "input()".', say: 'input is like a waiter taking your order. The program stops and waits. Nothing happens until you type something and press Enter.' },
      { do: 'Point at "You type 15", then draw an arrow to "15" in speech marks.', say: 'Here\'s the important bit. Whatever you type comes back as text. Even if you type 15, Python gets the text one five, in speech marks.' },
      { do: 'Circle the speech marks around "15".', say: 'And you can\'t do maths with text. If you try to add 10 to it, Python gets confused and crashes.' },
      { do: 'Point at int().', say: 'So we use int. Think of it as a currency exchange: you hand over the text 15, and it swaps it for the real number 15.' },
      { do: 'Point at the green 15.', say: 'Now it\'s a number, and you can do sums with it.' },
      { do: 'Press Space to show the code. Underline age = input().', say: 'In code it looks like this. Age is set to whatever the user types. Then age is set to int of age: the same thing, turned into a number.' },
      { say: 'Two things to remember: input always gives you text, and int turns it into a number.' },
    ],
  },
  {
    year: 8, lesson: 3, clip: 'predictRun', title: 'Input and conversion', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'If you type Susie, what will it print?',
      left: [{ kind: 'code', code: 'name = input()\nprint("Hello,", name + "!")' }, { kind: 'blank', label: 'My prediction', lines: 1 }],
      right: [{ kind: 'output', label: 'Output', text: 'Susie\nHello, Susie!', reveal: true }],
    },
    script: [
      { say: "This program asks for your name and says hello. Let's predict it exactly, down to every space." },
      { do: 'Point at line 1.', say: 'Line one waits for you to type. We\'ll type Susie, so the name box now holds Susie.' },
      { do: 'Circle "Hello," on line 2.', say: 'Line two prints the text Hello with a comma inside the speech marks.' },
      { do: 'Circle the comma between the two parts.', say: 'Then there\'s a comma outside the speech marks. That one separates the two things we\'re printing, and Python puts a space there.' },
      { do: 'Circle name + "!".', say: 'Then name plus an exclamation mark. Plus joins text with no space at all.' },
      { do: 'Pause 3 seconds.', say: 'So what exactly will it print? Where are the spaces? Pause and write it down.' },
      { do: 'Write "Hello, Susie!" and draw a dot for the one space.', say: 'Hello, comma, one space, Susie, and the exclamation mark stuck right on the end.' },
      { do: 'Press Space to show the output.', say: 'Here it is. The first line is what you typed. Then Hello, Susie! Now press Check on the page: the checker will try Susie, Ade and Sam.' },
    ],
  },
  {
    year: 8, lesson: 3, clip: 'fixBug', title: 'Input and conversion', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      sub: 'The user types 12',
      left: [
        { kind: 'code', label: 'Broken', code: 'age = input()\nprint("In 10 years you will be", age + 10)' },
        { kind: 'error', text: 'TypeError: can only concatenate str (not "int") to str', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'age = int(input())\nprint("In 10 years you will be", age + 10)', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'In 10 years you will be 22', reveal: true }],
    },
    script: [
      { say: 'This program should tell you how old you\'ll be in ten years. Let\'s run it and type 12.' },
      { do: 'Press Space to show the error.', say: 'TypeError. Let\'s read it slowly: can only concatenate str, not int, to str.' },
      { do: 'Underline "str" and "int" in the error.', say: 'str means string, text. int means integer, a number. Concatenate means join. So Python is saying: I can only join text to text, and you gave me a number.' },
      { do: 'Circle age + 10.', say: 'Here\'s the problem. What\'s in age? Remember, input always gives text. So age is the text one two, and we\'re trying to add the number 10. Python can\'t mix them.' },
      { do: 'Pause 3 seconds.', say: 'How do we turn the text into a number? Pause and think.' },
      { do: 'Write int( ) around input() on line 1.', say: 'int! Wrap input in int, and the text becomes the number 12 before it goes into the box. Read it from the inside out: input collects the text, int changes it, and equals stores it.' },
      { do: 'Press Space for the fixed code, then Space again for the output.', say: '12 plus 10 is 22. Notice there are two closing brackets at the end of line one: one for input, one for int.' },
    ],
  },

  // ---------- Lesson 4: Joining text ----------
  {
    year: 8, lesson: 4, clip: 'bigIdea', title: 'Joining text: comma or plus?', minutes: '1–2',
    board: {
      heading: 'A comma is glue with gaps. A plus is superglue.',
      left: [
        { kind: 'code', label: 'Comma', code: 'print("Hi", name, "you are", age)' },
        { kind: 'output', text: 'Hi Sam you are 12', reveal: true },
        { kind: 'code', label: 'Plus', code: 'print("Hi " + name + " you are " + str(age))' },
        { kind: 'output', text: 'Hi Sam you are 12', reveal: true },
      ],
      right: [{ kind: 'code', code: 'name = "Sam"\nage = 12' }, { kind: 'big', text: '"Hi" + "Sam"  →  HiSam' }],
    },
    script: [
      { say: 'There are two ways to join things together in print, and they behave differently.' },
      { do: 'Point at the comma version. Circle each comma.', say: 'A comma is like glue with gaps. Python puts a space between each part for you. And it doesn\'t mind mixing text and numbers.' },
      { do: 'Press Space. Draw dots for the spaces in the output.', say: 'Hi Sam you are 12. Python added every one of those spaces.' },
      { do: 'Point at the plus version. Circle each +.', say: 'Plus is like superglue. It sticks text together with no gap at all.' },
      { do: 'Point at "HiSam" on the right.', say: 'Hi plus Sam gives HiSam. So with plus, you have to type the spaces yourself, inside the speech marks.' },
      { do: 'Circle the space inside "Hi " and " you are ".', say: 'See the space after Hi, and before and after you are.' },
      { do: 'Circle str(age).', say: 'And plus only joins text to text. Age is a number, so we turn it into text with str.' },
      { do: 'Press Space to show the second output.', say: 'Same result. The comma is usually easier. But sometimes a task asks you to use plus, so you need both.' },
    ],
  },
  {
    year: 8, lesson: 4, clip: 'predictRun', title: 'Joining text: comma or plus?', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'You type Sam, then 7G',
      left: [{ kind: 'code', code: 'name = input()\nform = input()\nprint("Hello, my name is " + name + " from " + form)' }, { kind: 'blank', label: 'My prediction', lines: 1 }],
      right: [{ kind: 'output', label: 'Output', text: 'Sam\n7G\nHello, my name is Sam from 7G', reveal: true }],
    },
    script: [
      { say: "A name badge program. We'll type Sam, then 7G. The question is: where does every space come from?" },
      { do: 'Point at lines 1 and 2.', say: 'Two inputs. Name gets Sam, form gets 7G.' },
      { do: 'Circle each + on line 3.', say: 'Line three uses plus, so Python adds no spaces of its own.' },
      { do: 'Draw a dot in each space inside the speech marks.', say: 'So the spaces must be inside the speech marks. There\'s one after is, one before from, and one after from.' },
      { do: 'Pause 3 seconds.', say: 'Write down exactly what it prints.' },
      { do: 'Write the sentence, with dots for spaces.', say: 'Hello, my name is Sam from 7G.' },
      { do: 'Cross out the space after "is " in the code and write "isSam" to the side.', say: 'What if we forgot the space after is? We\'d get isSam, all squashed together. The checker would mark that wrong.' },
      { do: 'Press Space to show the output.', say: 'Check every gap before you submit. The dots on the page show you where the spaces are.' },
    ],
  },
  {
    year: 8, lesson: 4, clip: 'fixBug', title: 'Joining text: comma or plus?', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      left: [
        { kind: 'code', label: 'Broken', code: 'score = 7\nprint("Your score is " + score)' },
        { kind: 'error', text: 'TypeError: can only concatenate str (not "int") to str', reveal: true },
        { kind: 'code', label: 'Fix 1', code: 'print("Your score is " + str(score))', reveal: true },
        { kind: 'code', label: 'Fix 2', code: 'print("Your score is", score)', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'Your score is 7', reveal: true }],
    },
    script: [
      { say: "Here's a short one. It should print Your score is 7." },
      { do: 'Press Space to show the error.', say: 'TypeError again: can only concatenate str, not int, to str.' },
      { do: 'Circle + score.', say: 'We\'re using plus to join text and a number. Plus only joins text to text.' },
      { do: 'Pause 3 seconds.', say: 'There are two ways to fix this. Can you think of one?' },
      { do: 'Press Space for fix 1. Circle str(score).', say: 'Fix one: turn the number into text with str. Now it\'s text plus text.' },
      { do: 'Press Space for fix 2. Circle the comma.', say: 'Fix two: use a comma instead. Commas are happy with numbers.' },
      { do: 'Circle the space at the end of "Your score is " in the broken code, then point at fix 2.', say: 'Careful! The comma adds its own space. So if you switch to a comma, take the space out of the speech marks, or you\'ll get two spaces.' },
      { do: 'Press Space to show the output.', say: 'Either way: Your score is 7, with exactly one space.' },
    ],
  },

  // ---------- Lesson 5: Calculations with input ----------
  {
    year: 8, lesson: 5, clip: 'bigIdea', title: 'Calculations with input', minutes: '1–2',
    board: {
      heading: 'Input → process → output',
      left: [
        { kind: 'code', code: 'age = int(input())\nfuture_age = age + 5\nprint("In five years:", future_age)' },
        { kind: 'big', text: '2 * 8 + 3 * 5 = ?' },
      ],
      right: [{ kind: 'points', items: ['1. Input: read the numbers', '2. Process: do the sum', '3. Output: print the answer'] }],
    },
    script: [
      { say: 'Almost every program you will write follows the same three steps. Like a recipe.' },
      { do: 'Point at the three steps on the right.', say: 'Input: get the ingredients. Process: do the cooking. Output: serve it up.' },
      { do: 'Bracket line 1 and label it INPUT.', say: 'Line one is the input. int of input: we read what the user types and turn it into a number straight away.' },
      { do: 'Draw arrows: input() first, then int(), then =.', say: 'Read it from the inside out. input collects the text. int changes it to a number. Equals puts it in the box.' },
      { do: 'Bracket line 2 and label it PROCESS.', say: 'Line two is the process. Add five, and keep the answer in a new box called future_age.' },
      { do: 'Bracket line 3 and label it OUTPUT.', say: 'Line three is the output. Print the answer.' },
      { do: 'Point at the sum. Underline 2 * 8 and 3 * 5.', say: 'One more thing. Python does multiply before add, like in maths. Two times eight is sixteen, three times five is fifteen.' },
      { do: 'Write 16 + 15 = 31.', say: 'Then add: thirty-one. You\'ll need that for the cinema task.' },
    ],
  },
  {
    year: 8, lesson: 5, clip: 'predictRun', title: 'Calculations with input', minutes: '2–3',
    board: {
      heading: 'Trace it',
      sub: 'The user types 12',
      left: [{ kind: 'code', code: 'age_text = input()\nage = int(age_text)\nfuture_age = age + 5\nprint("In five years:", future_age)' }],
      right: [
        { kind: 'table', columns: ['Line', 'age_text', 'age', 'future_age', 'Output'], rows: [['1', '', '', '', ''], ['2', '', '', '', ''], ['3', '', '', '', ''], ['4', '', '', '', '']] },
        { kind: 'output', label: 'Output', text: 'In five years: 17', reveal: true },
      ],
    },
    script: [
      { say: "We're going to trace this program with a trace table. We'll be the computer, one line at a time. The user types 12." },
      { do: 'Line 1: write "12" with quotes in the age_text column.', say: 'Line one. age_text gets what the user typed. I\'m writing it in speech marks because it\'s text.' },
      { do: 'Line 2: copy "12" across, write 12 without quotes under age.', say: 'Line two. age is int of age_text: the number 12. No speech marks now. Notice age_text doesn\'t change.' },
      { do: 'Pause 3 seconds.', say: 'Line three. What goes in future_age? Pause and fill in the row.' },
      { do: 'Line 3: write 17 under future_age.', say: '12 plus 5 is 17.' },
      { do: 'Line 4: write "In five years: 17" under Output, with a dot for the space.', say: 'Line four prints. The comma adds one space after the colon.' },
      { do: 'Press Space to show the output.', say: 'In five years: 17. Now try it on the page, and type 10. What should you get?' },
    ],
  },
  {
    year: 8, lesson: 5, clip: 'fixBug', title: 'Calculations with input', minutes: '2–3',
    board: {
      heading: 'Fix it: the tuck shop',
      sub: 'Pocket money 5, snack price 2',
      left: [
        { kind: 'code', label: 'Broken', code: 'money = int(input())\nprice = int(input())\nprint("Your change is", change, "pounds")' },
        { kind: 'error', text: "NameError: name 'change' is not defined", reveal: true },
        { kind: 'code', label: 'Fixed', code: 'money = int(input())\nprice = int(input())\nchange = money - price\nprint("Your change is", change, "pounds")', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'Your change is 3 pounds', reveal: true }],
    },
    script: [
      { say: 'This tuck shop program should work out your change. We type 5 pounds of pocket money and a 2 pound snack.' },
      { do: 'Press Space to show the error. Underline NameError.', say: 'NameError: name change is not defined. Python is looking for a box called change, and it doesn\'t exist.' },
      { do: 'Label the lines INPUT, INPUT, OUTPUT.', say: 'Let\'s use our recipe. Input, input... output. What\'s missing?' },
      { do: 'Pause 3 seconds. Draw an arrow between line 2 and line 3 and write PROCESS.', say: 'The process step! We never worked out the change.' },
      { do: 'Write change = money - price in the gap.', say: 'Change is money take away price. That makes the box, so the print line can use it.' },
      { do: 'Press Space for the fixed code, then Space for the output.', say: 'Five take away two is three. Your change is 3 pounds.' },
      { say: 'The order matters. You have to make a box before you can use it.' },
    ],
  },

  // ---------- Lesson 6: Tracing and debugging ----------
  {
    year: 8, lesson: 6, clip: 'bigIdea', title: 'Tracing and debugging', minutes: '1–2',
    board: {
      heading: 'score = score + 5',
      sub: 'Read it from the right',
      left: [{ kind: 'code', code: 'score = 8\nscore = score + 5\nprint(score)' }],
      right: [{ kind: 'boxes', boxes: [{ name: 'score', value: '8' }] }, { kind: 'output', label: 'Output', text: '13', reveal: true }],
    },
    script: [
      { say: 'This line confuses almost everyone the first time: score equals score plus five. In maths that\'s impossible. In Python it makes perfect sense.' },
      { do: 'Point at line 1 and the score box.', say: 'Line one puts 8 in the score box.' },
      { do: 'Draw an arrow from the right-hand side of line 2 backwards to the left.', say: 'For line two, read from the right. First, Python works out score plus 5.' },
      { do: 'Circle "score + 5" and write 8 + 5 = 13.', say: 'What\'s in score right now? 8. So 8 plus 5 is 13.' },
      { do: 'Cross out 8 in the box and write 13.', say: 'Then the equals sign puts the answer back in the score box. The old 8 is thrown away.' },
      { do: 'Press Space to show the output.', say: 'So it prints 13.' },
      { say: 'A trace table is just this, done carefully for every line: what is in each box, after each line. That\'s how you can predict any program without running it.' },
    ],
  },
  {
    year: 8, lesson: 6, clip: 'predictRun', title: 'Tracing and debugging', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'Write the three output lines',
      left: [{ kind: 'code', code: 'score = 8\nprint("score")\nprint(score + 2)\nscore = score + 5\nprint(score)' }],
      right: [
        { kind: 'table', columns: ['Line', 'score', 'Output'], rows: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', ''], ['5', '', '']] },
        { kind: 'output', label: 'Output', text: 'score\n10\n13', reveal: true },
      ],
    },
    script: [
      { say: 'This is test practice. Trace the program, then predict the three lines of output.' },
      { do: 'Line 1: write 8 under score.', say: 'Line one, score is 8.' },
      { do: 'Circle the speech marks on line 2. Pause 3 seconds.', say: 'Line two prints score, in speech marks. What does it print?' },
      { do: 'Write the word score under Output.', say: 'The word score. Speech marks mean "say exactly this".' },
      { do: 'Line 3. Pause 3 seconds, then write 10.', say: 'Line three prints score plus 2. 8 plus 2 is 10. But careful: did score change?' },
      { do: 'Write 8 under score for line 3.', say: 'No! We printed score plus 2, but we didn\'t store it. score is still 8.' },
      { do: 'Line 4: write 13 under score.', say: 'Line four does store it: score is set to 8 plus 5, which is 13.' },
      { do: 'Line 5: write 13 under Output.', say: 'Line five prints 13.' },
      { do: 'Press Space to show the output.', say: 'score, 10, 13. If you got 15 for the last one, you probably changed score on line three. Only an equals sign changes a box.' },
    ],
  },
  {
    year: 8, lesson: 6, clip: 'fixBug', title: 'Tracing and debugging', minutes: '2–3',
    board: {
      heading: 'Bug hunt: two bugs',
      sub: 'The user types 10',
      left: [
        { kind: 'code', label: 'Broken', code: 'score = int(input())\nbonus = 5\ntotal = score + Bonus\nprint("Total: " + total)' },
        { kind: 'error', text: "NameError: name 'Bonus' is not defined", reveal: true },
        { kind: 'error', text: 'TypeError: can only concatenate str (not "int") to str', reveal: true },
      ],
      right: [{ kind: 'code', label: 'Fixed', code: 'score = int(input())\nbonus = 5\ntotal = score + bonus\nprint("Total: " + str(total))', reveal: true }, { kind: 'output', label: 'Output', text: 'Total: 15', reveal: true }],
    },
    script: [
      { say: 'This program has two bugs. Python only tells you about one error at a time, so we fix one, run again, and find the next.' },
      { do: 'Press Space to show the first error.', say: 'NameError: name Bonus is not defined.' },
      { do: 'Circle "bonus" on line 2 and "Bonus" on line 3.', say: 'Line two makes bonus with a small b. Line three uses Bonus with a capital. Different names.' },
      { do: 'Correct the B to b.', say: 'Fix the capital and run it again.' },
      { do: 'Press Space to show the second error.', say: 'A new error! That\'s good news: it means we got further. TypeError, can only concatenate str to str.' },
      { do: 'Circle + total on line 4.', say: 'We\'re joining text and a number with plus. total is a number.' },
      { do: 'Write str( ) around total.', say: 'Wrap it in str to make it text.' },
      { do: 'Press Space for the fixed code, then Space for the output.', say: '10 plus 5 is 15. Total: 15. Go through the debug checklist on the page every time you get stuck.' },
    ],
  },
];
