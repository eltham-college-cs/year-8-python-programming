import type { VideoPlan } from './types';

// Space reveals hidden blocks one at a time: left column first, then right.

export const year8: VideoPlan[] = [
  // ---------- Lesson 1: Output, input and casting ----------
  {
    year: 8, lesson: 7, clip: 'bigIdea', title: 'Output, input and casting', minutes: '1–2',
    board: {
      heading: 'Three things to remember from the first two units',
      left: [
        { kind: 'points', items: ['1. Comma adds a space. Plus adds nothing.', '2. input() always gives back a string.', '3. int() → number for maths. str() → text for +.'] },
        { kind: 'flow', typed: '45' },
        { kind: 'code', code: 'age = input()      # user types 12\nprint(age * 2)' },
        { kind: 'output', text: '1212', reveal: true },
      ],
    },
    script: [
      { say: 'Before we move on to new things, here are the three ideas from the first two units that everything else is built on.' },
      { do: 'Point at point 1.', say: 'One. In print, a comma adds a space and is happy with numbers. A plus glues text together with no space and refuses to mix text and numbers.' },
      { do: 'Point at point 2. Underline "always".', say: 'Two. input always gives back a string. Always. Even when the user types digits.' },
      { do: 'Point at the flow diagram.', say: 'You type 45, and Python gets the text four five. int exchanges it for the number 45.' },
      { do: 'Circle age * 2. Pause 3 seconds.', say: 'Here\'s a classic surprise. The user types 12, and we print age times 2. What do you think we get?' },
      { do: 'Press Space to show 1212.', say: '1212! age is text, and multiplying text repeats it. Twelve, twelve.' },
      { do: 'Write int(age) * 2 = 24 beside it.', say: 'Cast it first with int and you get 24. When a number looks doubled up or glued together, look for a missing int.' },
    ],
  },
  {
    year: 8, lesson: 7, clip: 'predictRun', title: 'Output, input and casting', minutes: '2–3',
    board: {
      heading: 'Trace it',
      sub: 'The user types 45',
      left: [{ kind: 'code', code: 'score = input()\ntotal = int(score) + 5\nmsg = "You scored " + str(total)\nprint(msg)' }],
      right: [
        { kind: 'table', columns: ['Line', 'score', 'total', 'msg'], rows: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', ''], ['4', '', '', '']] },
        { kind: 'output', label: 'Output', text: 'You scored 50', reveal: true },
      ],
    },
    script: [
      { say: 'A trace table for a casting program. The user types 45. I\'ll write strings in red and numbers in green as we go.' },
      { do: 'Line 1: write "45" in red under score.', say: 'Line one: score is the string 45.' },
      { do: 'Line 2: circle int(score). Pause 3 seconds.', say: 'Line two casts score to a number and adds 5. What\'s total? And does score change?' },
      { do: 'Write 50 in green under total. Copy "45" across in red.', say: 'total is 50. score is still the string 45: int made a new value, it didn\'t change the box.' },
      { do: 'Line 3: circle str(total).', say: 'Line three turns 50 back into text so we can join it with plus.' },
      { do: 'Write "You scored 50" in red under msg.', say: 'msg is the string You scored 50. Notice the space is inside the speech marks, because plus doesn\'t add one.' },
      { do: 'Press Space to show the output.', say: 'Line four prints it. Text in, convert to a number for maths, convert back to text for joining.' },
    ],
  },
  {
    year: 8, lesson: 7, clip: 'fixBug', title: 'Output, input and casting', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      sub: 'The user types Sam, then 12',
      left: [
        { kind: 'code', label: 'Broken', code: 'name = input()\nage = input()\nprint("Hello " + name + ", next year you will be", age + 1)' },
        { kind: 'error', text: 'TypeError: can only concatenate str (not "int") to str', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'name = input()\nage = int(input())\nprint("Hello " + name + ", next year you will be", age + 1)', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: 'Hello Sam, next year you will be 13', reveal: true }],
    },
    script: [
      { say: 'This one mixes plus and commas in the same line, so read it carefully.' },
      { do: 'Press Space to show the error.', say: 'TypeError: can only concatenate str, not int, to str.' },
      { do: 'Circle age + 1.', say: 'Which plus is the problem? Not the ones joining Hello and name: those are all text. It\'s age plus 1. age came from input, so it\'s text.' },
      { do: 'Pause 3 seconds.', say: 'Where\'s the best place to fix it?' },
      { do: 'Write int( ) around input() on line 2.', say: 'At the moment we read it. age is set to int of input. Now age is a number everywhere in the program.' },
      { do: 'Press Space for the fixed code. Draw dots for the spaces in the print line.', say: 'Look at the spaces: one inside "Hello ", one after the comma in the text, and one added by the comma before age plus 1.' },
      { do: 'Press Space to show the output.', say: 'Hello Sam, next year you will be 13.' },
    ],
  },

  // ---------- Lesson 2: Making decisions ----------
  {
    year: 8, lesson: 8, clip: 'bigIdea', title: 'Making decisions: if, elif, else', minutes: '1–2',
    board: {
      heading: 'if / elif / else is a road junction',
      left: [
        { kind: 'code', code: 'if mark >= 70:\n    print("Distinction")\nelif mark >= 50:\n    print("Merit")\nelse:\n    print("Keep going")' },
        { kind: 'big', text: 'mark = 70   sets\nmark == 70  asks' },
      ],
      right: [{ kind: 'table', columns: ['Operator', 'Means'], rows: [['==', 'equal to'], ['!=', 'not equal to'], ['>', 'greater than'], ['<', 'less than'], ['>=', 'greater than or equal'], ['<=', 'less than or equal']] }],
    },
    script: [
      { say: 'Programs need to make decisions. To do that, Python asks yes or no questions.' },
      { do: 'Point at the operator table.', say: 'These are comparison operators. Each one asks a question, and the answer is True or False.' },
      { do: 'Point at the big text. Circle the single = and the double ==.', say: 'Watch out for this one. A single equals sets a box. A double equals asks "are these the same?"' },
      { do: 'Draw a road splitting into three at the if, elif and else lines.', say: 'if, elif and else are like a road junction with signs. Python reads the signs from the top, and takes the first road whose answer is True.' },
      { do: 'Write mark = 72 beside the code. Tick the first condition.', say: 'Say the mark is 72. Is 72 at least 70? True. So we print Distinction...' },
      { do: 'Cross through the elif and else lines.', say: '...and every other road is skipped. Even though 72 is also at least 50, Python never asks.' },
      { say: 'That\'s why the order matters. Put the strictest test first.' },
    ],
  },
  {
    year: 8, lesson: 8, clip: 'predictRun', title: 'Making decisions: if, elif, else', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'What does it print for 55, 70 and 39?',
      left: [{ kind: 'code', code: 'mark = int(input())\nif mark >= 70:\n    print("Distinction")\nelif mark >= 50:\n    print("Merit")\nelif mark >= 40:\n    print("Pass")\nelse:\n    print("Not yet")' }],
      right: [
        { kind: 'table', columns: ['mark', 'Prediction'], rows: [['55', ''], ['70', ''], ['39', '']] },
        { kind: 'output', label: 'Answers', text: '55 → Merit\n70 → Distinction\n39 → Not yet', reveal: true },
      ],
    },
    script: [
      { say: 'Three marks to try. For each one, walk down the junction until a sign says True.' },
      { do: 'Write 55. Tick or cross each condition beside the code.', say: '55. Is it at least 70? No. Is it at least 50? Yes. So Merit, and we stop.' },
      { do: 'Write Merit in the table.', say: 'Merit.' },
      { do: 'Pause 3 seconds.', say: 'Now 70. This is the tricky one: it\'s exactly on the boundary.' },
      { do: 'Circle >= on line 2. Write Distinction.', say: 'Greater than or equal to includes 70 itself. So Distinction. If it had been just greater than, 70 would only get Merit.' },
      { do: 'Pause 3 seconds. Then cross every condition for 39.', say: '39. At least 70? No. 50? No. 40? No. So we fall through to else.' },
      { do: 'Write Not yet. Press Space to show the answers.', say: 'Not yet. Now run it on the page, and try 40 and 50 yourself.' },
    ],
  },
  {
    year: 8, lesson: 8, clip: 'fixBug', title: 'Making decisions: if, elif, else', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      left: [
        { kind: 'code', label: 'Broken', code: 'age = int(input())\nif age < 12\n    print("Child ticket")\nelse:\n    print("Adult ticket")' },
        { kind: 'error', text: "SyntaxError: expected ':'", reveal: true },
      ],
      right: [
        { kind: 'code', label: 'Fixed', code: 'age = int(input())\nif age < 12:\n    print("Child ticket")\nelse:\n    print("Adult ticket")', reveal: true },
        { kind: 'output', label: 'Output for 8, then 12', text: 'Child ticket\nAdult ticket', reveal: true },
      ],
    },
    script: [
      { say: 'A ticket price program that won\'t even start.' },
      { do: 'Press Space to show the error.', say: 'SyntaxError: expected a colon. Python even tells us what\'s missing.' },
      { do: 'Circle the end of line 2.', say: 'Every line that starts with if, elif, else, for or while must end in a colon. The colon means "the indented block starts here".' },
      { do: 'Add a colon to line 2.', say: 'Add it in.' },
      { do: 'Draw arrows showing the indented lines belong to if and else.', say: 'And notice the indentation: the print lines are pushed in four spaces to show they belong to the if, and to the else.' },
      { do: 'Press Space twice.', say: '8 gives Child ticket. 12 gives Adult ticket, because 12 is not less than 12.' },
      { say: 'Test the boundary every time. It\'s where most mistakes hide.' },
    ],
  },

  // ---------- Lesson 3: The remainder operator ----------
  {
    year: 8, lesson: 9, clip: 'bigIdea', title: 'The remainder operator %', minutes: '1–2',
    board: {
      heading: '% gives what is left over',
      left: [
        { kind: 'big', text: '7 % 2 = ?' },
        { kind: 'big', text: '6 % 3 = ?' },
        { kind: 'code', code: 'if x % 2 == 0:\n    print("even")', reveal: true },
      ],
      right: [],
    },
    script: [
      { say: 'The percent sign in Python has nothing to do with percentages. It gives you the remainder: what\'s left over after dividing.' },
      { do: 'Draw 7 dots for sweets, and two stick people.', say: 'Imagine sharing 7 sweets fairly between 2 friends.' },
      { do: 'Circle pairs of dots, leaving one over.', say: 'They get three each, and there\'s one left over. So 7 percent 2 is 1.' },
      { do: 'Write 1 next to 7 % 2.', say: 'Not three. Three is how many each person gets. Percent gives you the leftover.' },
      { do: 'Point at 6 % 3. Pause 3 seconds.', say: 'Six shared between three?' },
      { do: 'Write 0.', say: 'Two each, nothing left. Zero.' },
      { do: 'Press Space. Underline x % 2 == 0.', say: 'A remainder of zero means it divided exactly. So if x percent 2 is zero, x is even. That one line will come up again and again.' },
    ],
  },
  {
    year: 8, lesson: 9, clip: 'predictRun', title: 'The remainder operator %', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      left: [{ kind: 'code', code: 'print(7 % 2)\nprint(10 % 3)\nprint(12 % 4)' }, { kind: 'blank', label: 'My prediction', lines: 3 }],
      right: [{ kind: 'output', label: 'Output', text: '1\n1\n0', reveal: true }],
    },
    script: [
      { say: 'Three remainders. Work each one out before we run it.' },
      { do: 'Point at line 1.', say: '7 percent 2. Two goes into seven three times, that\'s six, with one left.' },
      { do: 'Write 1.', say: 'One.' },
      { do: 'Point at line 2. Pause 3 seconds.', say: '10 percent 3. Pause and work it out.' },
      { do: 'Write 3 × 3 = 9, then 1.', say: 'Three threes are nine. Ten take away nine leaves one.' },
      { do: 'Point at line 3. Pause 3 seconds.', say: 'And 12 percent 4?' },
      { do: 'Write 0.', say: 'Four goes into twelve exactly three times. Nothing left: zero. So 12 is divisible by 4.' },
      { do: 'Press Space to show the output.', say: '1, 1, 0. Now use this to decide whether a number is odd or even in the next task.' },
    ],
  },
  {
    year: 8, lesson: 9, clip: 'fixBug', title: 'The remainder operator %', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      left: [
        { kind: 'code', label: 'Broken', code: 'n = int(input())\nif n % 5 = 0:\n    print("Yes")\nelse:\n    print("No")' },
        { kind: 'error', text: "SyntaxError: cannot assign to expression here.\nMaybe you meant '==' instead of '='?", reveal: true },
      ],
      right: [{ kind: 'code', label: 'Fixed', code: 'if n % 5 == 0:', reveal: true }, { kind: 'output', label: 'Output for 25, then 12', text: 'Yes\nNo', reveal: true }],
    },
    script: [
      { say: 'This should say Yes if a number divides exactly by 5.' },
      { do: 'Press Space to show the error.', say: 'cannot assign to expression here. Maybe you meant double equals instead of equals?' },
      { do: 'Circle the = on line 2.', say: 'A single equals means "put a value in a box". Python thinks we\'re trying to put 0 into n percent 5, which makes no sense.' },
      { do: 'Write a second = next to it.', say: 'We want to ask a question: is it equal to zero? That needs double equals.' },
      { do: 'Press Space twice.', say: '25 percent 5 is 0, so Yes. 12 percent 5 is 2, so No.' },
      { say: 'Inside an if or a while, you almost always want double equals.' },
    ],
  },

  // ---------- Lesson 4: Counting with for loops ----------
  {
    year: 8, lesson: 10, clip: 'bigIdea', title: 'Counting with for loops', minutes: '1–2',
    board: {
      heading: 'range(start, stop, hop)',
      sub: 'Starts at start. Stops BEFORE stop.',
      left: [{ kind: 'code', code: 'for i in range(1, 4):\n    print("Round", i)' }],
      right: [{ kind: 'table', columns: ['range', 'Gives'], rows: [['range(2, 6)', ''], ['range(0, 10, 2)', ''], ['range(10, 0, -2)', ''], ['range(5, 5)', '']] }],
    },
    script: [
      { say: 'A for loop is like a coach saying "run three laps". The coach counts the laps for you, and i holds the lap number each time round.' },
      { do: 'Circle range(1, 4).', say: 'range 1 to 4 starts at 1 and stops before 4. So i will be 1, then 2, then 3.' },
      { do: 'Write 1, 2, 3 beside the loop. Cross out 4.', say: 'Never 4. The stop number is a stop line, you don\'t cross it.' },
      { do: 'Fill in range(2, 6): 2, 3, 4, 5.', say: 'range 2 to 6: 2, 3, 4, 5. Four numbers: six take away two.' },
      { do: 'Circle the 2 in range(0, 10, 2). Pause 3 seconds.', say: 'A third number is the hop: how far to jump each time. What does this give?' },
      { do: 'Write 0, 2, 4, 6, 8.', say: '0, 2, 4, 6, 8. Ten would be on the stop line, so it isn\'t included.' },
      { do: 'Fill in 10, 8, 6, 4, 2.', say: 'A negative hop counts down. It still stops before the stop number, so 0 is not printed.' },
      { do: 'Write "nothing" for range(5, 5).', say: 'And range 5 to 5 gives nothing at all. It starts on the stop line, so the loop never runs.' },
    ],
  },
  {
    year: 8, lesson: 10, clip: 'predictRun', title: 'Counting with for loops', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'How many lines? What is the last one?',
      left: [{ kind: 'code', code: 'for i in range(1, 4):\n    print("Round", i)' }],
      right: [
        { kind: 'table', columns: ['Loop', 'i', 'Output'], rows: [['1st', '', ''], ['2nd', '', ''], ['3rd', '', '']] },
        { kind: 'output', label: 'Output', text: 'Round 1\nRound 2\nRound 3', reveal: true },
      ],
    },
    script: [
      { say: 'Let\'s trace a for loop and fill in the table one pass at a time.' },
      { do: 'First row: write 1, then "Round 1" with a dot for the space.', say: 'First time round, i is 1. It prints Round, a space from the comma, then 1.' },
      { do: 'Second row. Pause 3 seconds.', say: 'Second time round?' },
      { do: 'Write 2 and "Round 2".', say: 'i is 2. Round 2.' },
      { do: 'Third row: write 3 and "Round 3".', say: 'Third time, i is 3. Round 3.' },
      { do: 'Write 4 below the table and cross it out.', say: 'Next, i would be 4, but 4 is the stop line. The loop ends. Three lines in total.' },
      { do: 'Press Space to show the output.', say: 'Round 1, Round 2, Round 3.' },
      { say: 'Watch the spaces if you change the text: "Round " with a space inside the speech marks plus the comma\'s space gives you two.' },
    ],
  },
  {
    year: 8, lesson: 10, clip: 'fixBug', title: 'Counting with for loops', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      sub: 'Count down from 20 to 0 in fives, then Liftoff!',
      left: [
        { kind: 'code', label: 'Broken', code: 'for x in range(20, 0, 5):\n    print(x)\nprint("Liftoff!")' },
        { kind: 'output', label: 'It prints', text: 'Liftoff!', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'for x in range(20, -1, -5):\n    print(x)\nprint("Liftoff!")', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: '20\n15\n10\n5\n0\nLiftoff!', reveal: true }],
    },
    script: [
      { say: 'No error this time. The program runs, but it\'s wrong.' },
      { do: 'Press Space to show what it prints.', say: 'It only prints Liftoff! The loop never ran at all.' },
      { do: 'Circle the 5 in range(20, 0, 5).', say: 'Start at 20, hop by plus 5. That goes up: 25, 30. But the stop line is 0, which is below us. We\'re already past it, so the loop gives nothing.' },
      { do: 'Change 5 to -5.', say: 'To count down, the hop must be negative: minus 5.' },
      { do: 'Write 20, 15, 10, 5 and circle the missing 0.', say: 'Now we get 20, 15, 10, 5... but not 0, because range stops before the stop number.' },
      { do: 'Pause 3 seconds.', say: 'How do we make sure 0 is printed?' },
      { do: 'Change the stop 0 to -1. Press Space for the fixed code, then the output.', say: 'Move the stop line one step past 0, to minus 1. Now 0 is included, then Liftoff.' },
    ],
  },

  // ---------- Lesson 5: Nesting ----------
  {
    year: 8, lesson: 11, clip: 'bigIdea', title: 'Nesting', minutes: '1–2',
    board: {
      heading: 'Indentation is the structure',
      left: [{ kind: 'code', label: 'if inside for', code: 'for x in range(1, 7):\n    if x % 2 == 0:\n        print(x, "even")\n    else:\n        print(x, "odd")' }],
      right: [{ kind: 'code', label: 'for inside for', code: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(i, "x", j, "=", i * j)' }],
    },
    script: [
      { say: 'Nesting means putting one block inside another. In Python, the only thing that shows what\'s inside what is indentation.' },
      { do: 'Draw a vertical line at 4 spaces and another at 8 spaces in the left code.', say: 'Four spaces in means inside the loop. Eight spaces means inside the if, which is inside the loop.' },
      { do: 'Draw a loop arrow around the left code.', say: 'An if inside a for makes a fresh decision every time round. x is 1: odd. x is 2: even. And so on, six times.' },
      { do: 'Point at the right code.', say: 'A for inside a for works like a car\'s mileage counter.' },
      { do: 'Write i=1 and then j=1, 2, 3 beside it.', say: 'The inner loop spins all the way round, 1, 2, 3, for every single click of the outer loop.' },
      { do: 'Write 3 × 3 = 9 lines.', say: 'Three outer times three inner is nine lines of output.' },
      { say: 'If your indentation is wrong, Python either refuses to run or does something different. So line it up carefully.' },
    ],
  },
  {
    year: 8, lesson: 11, clip: 'predictRun', title: 'Nesting', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'What will the first three lines be?',
      left: [{ kind: 'code', code: 'for x in range(1, 7):\n    if x % 2 == 0:\n        print(x, "even")\n    else:\n        print(x, "odd")' }],
      right: [
        { kind: 'table', columns: ['x', 'x % 2', '== 0 ?', 'Output'], rows: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', ''], ['4', '', '', ''], ['5', '', '', ''], ['6', '', '', '']] },
        { kind: 'output', label: 'Output', text: '1 odd\n2 even\n3 odd\n4 even\n5 odd\n6 even', reveal: true },
      ],
    },
    script: [
      { say: 'Six passes round the loop, and six decisions. Let\'s fill in the table.' },
      { do: 'Row 1: write 1, False, "1 odd".', say: 'x is 1. 1 percent 2 is 1. Is that equal to 0? False. So the else runs: 1 odd.' },
      { do: 'Row 2: write 0, True, "2 even".', say: 'x is 2. 2 percent 2 is 0. True. So the if runs: 2 even.' },
      { do: 'Row 3. Pause 3 seconds.', say: 'Your turn. What about 3?' },
      { do: 'Fill row 3, then quickly fill 4 to 6.', say: '3 odd. And the pattern continues: 4 even, 5 odd, 6 even.' },
      { do: 'Press Space to show the output.', say: 'The if is asked again from scratch every single time round, with the new value of x.' },
    ],
  },
  {
    year: 8, lesson: 11, clip: 'fixBug', title: 'Nesting', minutes: '2–3',
    board: {
      heading: 'Fix the indentation',
      left: [
        { kind: 'code', label: 'Broken', code: 'for x in range(1, 7):\n    if x % 2 == 0:\n    print(x, "even")' },
        { kind: 'error', text: "IndentationError: expected an indented block\nafter 'if' statement on line 2", reveal: true },
      ],
      right: [{ kind: 'code', label: 'Fixed', code: 'for x in range(1, 7):\n    if x % 2 == 0:\n        print(x, "even")', reveal: true }, { kind: 'output', label: 'Output', text: '2 even\n4 even\n6 even', reveal: true }],
    },
    script: [
      { say: 'This one is all about spaces at the start of lines.' },
      { do: 'Press Space to show the error.', say: 'IndentationError: expected an indented block after the if statement on line 2.' },
      { do: 'Draw lines at 4 and 8 spaces.', say: 'The if is inside the loop, so it\'s indented 4 spaces. Good. But the print is also only 4 spaces in, so Python thinks the if has nothing inside it.' },
      { do: 'Pause 3 seconds.', say: 'How many spaces does the print need?' },
      { do: 'Draw an arrow pushing print to the 8-space line.', say: 'Eight: four for the loop and four more for the if.' },
      { do: 'Press Space twice.', say: 'Now it only prints when x is even: 2, 4 and 6.' },
    ],
  },

  // ---------- Lesson 6: While loops ----------
  {
    year: 8, lesson: 12, clip: 'bigIdea', title: 'While loops', minutes: '1–2',
    board: {
      heading: 'for asks "how many?"  while asks "are we there yet?"',
      left: [{ kind: 'code', code: 'count = 5\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint("Lift off!")' }],
      right: [{ kind: 'points', items: ['1. Start value', '2. Condition', '3. Update'] }],
    },
    script: [
      { say: 'A for loop is great when you know how many times to repeat. But how many wrong passwords will someone type? Nobody knows. For that we need a while loop.' },
      { do: 'Underline the heading.', say: 'A for loop asks "how many?" A while loop asks "are we there yet?", and it asks again every single time round.' },
      { do: 'Circle line 1 and label it 1. START.', say: 'Every while loop needs three things. One: a start value, set before the loop.' },
      { do: 'Circle "count > 0" and label it 2. CONDITION.', say: 'Two: a condition. A True or False question about that variable. While it\'s True, the loop keeps going.' },
      { do: 'Circle line 4 and label it 3. UPDATE.', say: 'Three: an update. Something inside the loop that changes the variable, so the answer can eventually become False.' },
      { do: 'Draw an arrow from line 4 back up to line 2.', say: 'After the body, Python goes back to the top and asks the question again.' },
      { say: 'Read it aloud: while count is greater than zero, print it and take one off. Forget the update, and the loop never ends.' },
    ],
  },
  {
    year: 8, lesson: 12, clip: 'predictRun', title: 'While loops', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'How many numbers? Does it print 0?',
      left: [{ kind: 'code', code: 'count = 5\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint("Lift off!")' }],
      right: [
        { kind: 'table', columns: ['count', 'count > 0 ?', 'Output'], rows: [['5', '', ''], ['4', '', ''], ['3', '', ''], ['2', '', ''], ['1', '', ''], ['0', '', '']] },
        { kind: 'output', label: 'Output', text: '5\n4\n3\n2\n1\nLift off!', reveal: true },
      ],
    },
    script: [
      { say: 'Let\'s step through the countdown and watch the condition.' },
      { do: 'Row 1: True, 5.', say: 'count is 5. Is 5 greater than 0? True. Print 5, then take one off.' },
      { do: 'Row 2: True, 4.', say: 'Back to the top. 4 greater than 0? True. Print 4.' },
      { do: 'Fill rows 3 to 5 quickly.', say: 'Same for 3, 2 and 1.' },
      { do: 'Row 6. Pause 3 seconds.', say: 'Now count is 0. Is 0 greater than 0?' },
      { do: 'Write False. Leave Output blank, then write "Lift off!" below.', say: 'False! So we leave the loop and jump to the line after it: Lift off.' },
      { do: 'Count the True and False ticks.', say: 'The body ran 5 times, but the condition was checked 6 times. And 0 is never printed.' },
      { do: 'Press Space to show the output.', say: '5, 4, 3, 2, 1, Lift off!' },
    ],
  },
  {
    year: 8, lesson: 12, clip: 'fixBug', title: 'While loops', minutes: '2–3',
    board: {
      heading: 'Fill the gap',
      sub: 'Print the 7 times table up to 7 × 12',
      left: [
        { kind: 'code', code: 'n = 1\nwhile ____:\n    print(7 * n)\n    n = n + 1' },
        { kind: 'code', label: 'Option A', code: 'while n < 12:', reveal: true },
        { kind: 'code', label: 'Option B', code: 'while n <= 12:', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Last lines with B', text: '...\n77\n84', reveal: true }],
    },
    script: [
      { say: 'This loop is nearly finished. We need to write the condition.' },
      { do: 'Label line 1 START and line 4 UPDATE.', say: 'The start value is there: n is 1. The update is there: n goes up by 1 each time. So we just need the question.' },
      { do: 'Pause 3 seconds.', say: 'We want to stop after 7 times 12. What should the condition be?' },
      { do: 'Press Space for option A. Trace: n = 11 prints 77, n = 12 → False.', say: 'Option A: while n is less than 12. When n is 12, 12 is not less than 12, so the loop stops. We never print 84. Only 11 lines.' },
      { do: 'Press Space for option B.', say: 'Option B: less than or equal to 12. Now n equals 12 is still True, so we print 84. Then n becomes 13 and we stop.' },
      { do: 'Press Space to show the output.', say: '12 lines, ending with 84. Choosing between less than and less than or equal is called an off-by-one problem. Check the last value every time.' },
    ],
  },

  // ---------- Lesson 7: Loops that never end ----------
  {
    year: 8, lesson: 13, clip: 'bigIdea', title: 'Loops that never end', minutes: '1–2',
    board: {
      heading: 'Four ways to hang your program',
      left: [
        { kind: 'code', label: '1. No update', code: 'while count > 0:\n    print(count)' },
        { kind: 'code', label: '2. Wrong direction', code: 'while count > 0:\n    count = count + 1' },
      ],
      right: [
        { kind: 'code', label: "3. Can't be False", code: 'while 5 > 3:\n    print("hi")' },
        { kind: 'code', label: '4. The sneaky one', code: 'while total < 10:\n    count = count + 1' },
      ],
    },
    script: [
      { say: 'An infinite loop is a loop whose condition never becomes False. There are four usual causes.' },
      { do: 'Point at 1. Circle "count" in the condition.', say: 'One: no update. Nothing in the body changes count, so the answer is the same forever.' },
      { do: 'Point at 2. Draw an arrow going up, away from 0.', say: 'Two: the wrong direction. count does change, but it goes up, away from the exit.' },
      { do: 'Point at 3. Circle "5 > 3".', say: 'Three: a condition that can\'t be False. There\'s no variable in it at all. 5 is always bigger than 3.' },
      { do: 'Point at 4. Circle "total" in the condition and "count" in the body.', say: 'And four, the sneaky one. The condition is about total, but the body updates count. A different variable!' },
      { say: 'The fix is a checklist. Does the body change the variable in the condition? In the right direction? Is the update indented inside the loop? Can the condition ever be False?' },
      { say: 'On this site, a program that runs too long is stopped after 3 seconds, so you can\'t break anything. Try it.' },
    ],
  },
  {
    year: 8, lesson: 13, clip: 'predictRun', title: 'Loops that never end', minutes: '2–3',
    board: {
      heading: 'Checked at the top',
      sub: 'Will it print "count is now 0"?',
      left: [{ kind: 'code', code: 'count = 3\nwhile count > 0:\n    count = count - 1\n    print("count is now", count)' }],
      right: [
        { kind: 'table', columns: ['count', 'Check', 'Output'], rows: [['3', '', ''], ['2', '', ''], ['1', '', ''], ['0', '', '']] },
        { kind: 'output', label: 'Output', text: 'count is now 2\ncount is now 1\ncount is now 0', reveal: true },
      ],
    },
    script: [
      { say: 'Here\'s a question that catches lots of people. The condition is count greater than 0. Will the program ever print count is now 0?' },
      { do: 'Pause 3 seconds.', say: 'Make a prediction: yes or no?' },
      { do: 'Row 1: True. Draw count going 3 → 2. Write "count is now 2".', say: 'count is 3. 3 greater than 0, True. Inside, take one off: 2. Print count is now 2.' },
      { do: 'Row 2.', say: 'Back to the top. 2 greater than 0? True. Take one off: 1. Print 1.' },
      { do: 'Row 3. Circle the moment count becomes 0.', say: 'Back to the top. 1 greater than 0? True. Take one off: 0. Now the condition is False... but we\'re in the middle of the body.' },
      { do: 'Write "count is now 0".', say: 'Python doesn\'t stop mid-body. It finishes the body, so it prints count is now 0.' },
      { do: 'Row 4: False.', say: 'Only when it gets back to the top does it check: 0 greater than 0, False. Then it leaves.' },
      { do: 'Press Space to show the output.', say: 'The condition is only checked at the top of the loop. Never in the middle.' },
    ],
  },
  {
    year: 8, lesson: 13, clip: 'fixBug', title: 'Loops that never end', minutes: '2–3',
    board: {
      heading: 'Fix the infinite loops',
      left: [
        { kind: 'code', label: 'Ticket sale', code: 'tickets = 5\nwhile tickets > 0:\n    print(tickets)\n    tickets = tickets + 1\nprint("Sold out!")' },
        { kind: 'output', label: 'It prints', text: '5\n6\n7\n8\n...forever', reveal: true },
      ],
      right: [
        { kind: 'code', label: 'The sneaky one', code: 'total = 0\nsteps = 0\nwhile total < 10:\n    steps = steps + 1\nprint("Steps:", steps)' },
        { kind: 'code', label: 'Fixed', code: 'while total < 10:\n    steps = steps + 1\n    total = total + 2', reveal: true },
      ],
    },
    script: [
      { say: 'Two infinite loops to fix. The trick for both: watch the variable in the condition.' },
      { do: 'Press Space to show the ticket output.', say: 'The ticket sale prints 5, 6, 7, 8 and keeps going. The site stops it after 3 seconds.' },
      { do: 'Circle "tickets > 0" and "+ 1".', say: 'The condition is about tickets, and tickets does change. But it goes up. Selling tickets should make the number go down.' },
      { do: 'Change + to -.', say: 'Minus 1, and it counts down to 1 then says Sold out.' },
      { do: 'Point at the sneaky one. Circle "total" in the condition, then "steps" in the body.', say: 'The sneaky one. The condition asks about total. What does the body change?' },
      { do: 'Pause 3 seconds.', say: 'Is total ever updated?' },
      { do: 'Press Space for the fix. Underline total = total + 2.', say: 'No! Only steps. We need to add 2 to total each time round. Then after 5 steps, total reaches 10 and the loop stops.' },
      { say: 'Debug move: put a print inside the loop showing the variable in the condition. If that number never changes, you\'ve found your bug.' },
    ],
  },

  // ---------- Lesson 8: Passwords, validation and menus ----------
  {
    year: 8, lesson: 14, clip: 'bigIdea', title: 'Passwords, validation and menus', minutes: '1–2',
    board: {
      heading: 'Five shapes cover almost every while loop',
      left: [{ kind: 'table', columns: ['Shape', 'Condition'], rows: [['Counter', 'while count > 0:'], ['Retry', 'while attempt != PASSWORD:'], ['Retry with a limit', 'while attempt != PASSWORD and tries < 3:'], ['Validation', 'while age < 11 or age > 18:'], ['Sentinel', 'while choice != "q":']] }],
      right: [],
    },
    script: [
      { say: 'Almost every while loop you will ever write is one of these five shapes.' },
      { do: 'Point at Counter.', say: 'Counter: you\'ve seen this. Count down until you reach zero.' },
      { do: 'Point at Retry. Circle !=.', say: 'Retry: keep going while the attempt is not equal to the password. Exclamation-equals means "not equal".' },
      { do: 'Point at Retry with a limit. Circle "and".', say: 'Retry with a limit: and joins two conditions. Keep going while it\'s wrong AND you still have tries left. Both must be True.' },
      { do: 'Point at Validation. Circle "or".', say: 'Validation: keep asking while the age is too small OR too big. If either is True, ask again.' },
      { do: 'Point at Sentinel. Circle "q".', say: 'Sentinel: a special value that means "I\'m done". Keep going until the user types q.' },
      { do: 'Underline the variable in each condition.', say: 'Notice every condition names a variable that the body will change. That\'s what lets it stop.' },
    ],
  },
  {
    year: 8, lesson: 14, clip: 'predictRun', title: 'Passwords, validation and menus', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'The user types silver, bronze, gold',
      left: [{ kind: 'code', code: 'PASSWORD = "gold"\nattempt = input()\nwhile attempt != PASSWORD:\n    print("Incorrect. Try again.")\n    attempt = input()\nprint("Access granted.")' }],
      right: [
        { kind: 'table', columns: ['attempt', '!= "gold" ?', 'Output'], rows: [['', '', ''], ['', '', ''], ['', '', '']] },
        { kind: 'output', label: 'Output', text: 'Incorrect. Try again.\nIncorrect. Try again.\nAccess granted.', reveal: true },
      ],
    },
    script: [
      { say: 'A password loop. Notice input appears twice. That\'s not a mistake.' },
      { do: 'Circle line 2 and label it START.', say: 'Line two asks before the loop starts, so the condition has something to test. This is called priming the loop.' },
      { do: 'Circle line 5 and label it UPDATE.', say: 'Line five asks again inside the loop. That\'s the update.' },
      { do: 'Row 1: silver, True, "Incorrect. Try again."', say: 'First the user types silver. Is silver not equal to gold? True. So print Incorrect, and ask again.' },
      { do: 'Row 2. Pause 3 seconds.', say: 'Next they type bronze. What happens?' },
      { do: 'Row 2: bronze, True, Incorrect.', say: 'Still not gold. Incorrect again.' },
      { do: 'Row 3: gold, False. Write "Access granted." below.', say: 'Then gold. Is gold not equal to gold? False. So we leave the loop and print Access granted.' },
      { do: 'Press Space to show the output.', say: 'Delete line five and you\'d have an infinite loop: attempt would never change.' },
    ],
  },
  {
    year: 8, lesson: 14, clip: 'fixBug', title: 'Passwords, validation and menus', minutes: '2–3',
    board: {
      heading: 'Three attempts, then locked out',
      sub: 'The user types silver, bronze, copper',
      left: [
        { kind: 'code', label: 'Broken', code: 'while attempt != PASSWORD:\n    attempt = input()\n    tries = tries + 1' },
        { kind: 'error', text: 'EOFError: EOF when reading a line', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'while attempt != PASSWORD and tries < 3:', reveal: true },
      ],
      right: [{ kind: 'table', columns: ['tries', 'attempt', 'Keep going?'], rows: [['0', '""', ''], ['1', '"silver"', ''], ['2', '"bronze"', ''], ['3', '"copper"', '']] }],
    },
    script: [
      { say: 'This program should lock you out after three wrong passwords. But it doesn\'t.' },
      { do: 'Press Space to show the error.', say: 'The checker gives three wrong passwords, then the program asks for a fourth. There isn\'t one, so we get EOFError: Python ran out of input.' },
      { do: 'Circle the condition.', say: 'The loop only checks the password. It counts the tries, but never uses the count.' },
      { do: 'Pause 3 seconds.', say: 'What do we need to add to the condition?' },
      { do: 'Press Space for the fix. Circle "and tries < 3".', say: 'And tries less than 3. Keep going while the password is wrong AND we have tries left.' },
      { do: 'Fill in the table: True, True, True, then False for tries = 3.', say: 'Let\'s trace it. Tries 0, 1 and 2: both parts True, keep going. At tries 3, the second part is False, so the whole thing is False. Stop.' },
      { do: 'Write "<= 3 gives 4 tries" beside the table.', say: 'If you wrote less than or equal to 3, you\'d get four attempts. Count them on the trace, don\'t guess.' },
    ],
  },

  // ---------- Lesson 9: Making lists ----------
  {
    year: 8, lesson: 15, clip: 'bigIdea', title: 'Making lists', minutes: '1–2',
    board: {
      heading: 'One name, many values',
      left: [
        { kind: 'code', code: 'score1 = 12\nscore2 = 19\nscore3 = 7\nscore4 = 25\nscore5 = 16' },
        { kind: 'code', code: 'scores = [12, 19, 7, 25, 16]', reveal: true },
      ],
      right: [{ kind: 'list', name: 'scores', items: ['12', '19', '7', '25', '16'], reveal: true }, { kind: 'code', code: 'print(scores[0])\nprint(scores[4])\nprint(len(scores))', reveal: true }],
    },
    script: [
      { say: 'Five scores, five variables. Now the teacher wants a sixth. And a hundredth. This gets silly fast.' },
      { do: 'Circle the 1, 2, 3, 4, 5 in the variable names.', say: 'Whenever you catch yourself numbering variables, you want a list.' },
      { do: 'Press Space to show the list. Circle the square brackets and the commas.', say: 'A list is one variable holding several values, in order. Square brackets at each end, commas in between.' },
      { do: 'Press Space to show the boxes. Point at each index.', say: 'Each item has a position number called an index. And computers count from zero.' },
      { do: 'Circle index 0 and write 12.', say: 'So the first item, 12, is item 0.' },
      { do: 'Press Space. Point at scores[4].', say: 'scores square bracket 4 is the fifth item: 16.' },
      { do: 'Write len = 5, last index = 4.', say: 'len counts the items: 5. But the last index is 4. It\'s always one less than the length. Ask for scores 5 and Python stops with an IndexError.' },
    ],
  },
  {
    year: 8, lesson: 15, clip: 'predictRun', title: 'Making lists', minutes: '2–3',
    board: {
      heading: 'Predict, then run',
      sub: 'Write all four lines first',
      left: [{ kind: 'code', code: 'scores = [12, 19, 7]\nprint(scores)\nprint(scores[0])\nscores.append(25)\nprint(scores)\nprint(len(scores))' }],
      right: [{ kind: 'blank', label: 'My prediction', lines: 4 }, { kind: 'output', label: 'Output', text: '[12, 19, 7]\n12\n[12, 19, 7, 25]\n4', reveal: true }],
    },
    script: [
      { say: 'Four lines of output. Predict all four before we run it.' },
      { do: 'Point at line 2. Write [12, 19, 7].', say: 'Printing the whole list shows it with its square brackets and commas.' },
      { do: 'Point at line 3. Pause 3 seconds.', say: 'scores 0. What\'s that?' },
      { do: 'Write 12.', say: 'The first item: 12. Not 19!' },
      { do: 'Circle append(25). Draw an arrow to the end of the list.', say: 'Line four appends 25. Append always adds to the end.' },
      { do: 'Write [12, 19, 7, 25].', say: 'So now the list is 12, 19, 7, 25.' },
      { do: 'Point at the last line. Pause 3 seconds.', say: 'How many items now?' },
      { do: 'Write 4. Press Space to show the output.', say: 'Four. The list grew when we appended. Got three right and one wrong? The wrong one is the one worth writing down.' },
    ],
  },
  {
    year: 8, lesson: 15, clip: 'fixBug', title: 'Making lists', minutes: '2–3',
    board: {
      heading: 'Fix the bug',
      left: [
        { kind: 'code', label: 'Broken', code: 'pets = ["dog", "cat", "fish"]\nprint(pets[3])' },
        { kind: 'error', text: 'IndexError: list index out of range', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'print(pets[2])   # or pets[-1]', reveal: true },
      ],
      right: [{ kind: 'list', name: 'pets', items: ['"dog"', '"cat"', '"fish"'] }],
    },
    script: [
      { say: 'This should print the last pet: fish.' },
      { do: 'Press Space to show the error.', say: 'IndexError: list index out of range. We asked for an item number the list doesn\'t have.' },
      { do: 'Point at the boxes. Write 0, 1, 2 under them.', say: 'Three pets. Counting from zero: dog is 0, cat is 1, fish is 2.' },
      { do: 'Draw an empty box after fish labelled 3 and cross it out.', say: 'There is no item 3. Three items means the last index is 2.' },
      { do: 'Press Space for the fix.', say: 'Change it to pets 2.' },
      { do: 'Circle "pets[-1]".', say: 'Or use minus 1. Minus 1 always means the last item, however long the list is. That\'s handy when you don\'t know the length.' },
    ],
  },

  // ---------- Lesson 10: Changing lists ----------
  {
    year: 8, lesson: 16, clip: 'bigIdea', title: 'Changing lists', minutes: '1–2',
    board: {
      heading: 'append adds. [ ] = overwrites.',
      left: [{ kind: 'code', code: 'scores = [12, 19, 7]\nscores.append(25)\nscores[0] = 20' }, { kind: 'code', label: 'Never do this', code: 'shopping = shopping.append("milk")' }],
      right: [{ kind: 'list', name: 'scores', items: ['12', '19', '7'] }],
    },
    script: [
      { say: 'Lists can change after you make them. Two ways today.' },
      { do: 'Circle append(25). Draw a new box on the end and write 25.', say: 'Append adds one item to the end. Read it as "scores, append 25". The list is being told to do something.' },
      { do: 'Circle scores[0] = 20. Cross out 12 and write 20.', say: 'Square brackets with an equals overwrites. Slot 0 now holds 20. The 12 is gone. Nothing moves along.' },
      { do: 'Point at the "Never do this" code. Draw a big X.', say: 'One trap. Append changes the list itself and hands back nothing. Python calls nothing None.' },
      { do: 'Write "shopping = None".', say: 'So if you write shopping equals shopping dot append, your whole list gets replaced with None. Just write shopping dot append on its own.' },
    ],
  },
  {
    year: 8, lesson: 16, clip: 'predictRun', title: 'Changing lists', minutes: '2–3',
    board: {
      heading: 'Swap the ends',
      left: [{ kind: 'code', code: 'names = ["Ava", "Ben", "Chloe"]\ntemp = names[0]\nnames[0] = names[2]\nnames[2] = temp\nprint(names)' }],
      right: [
        { kind: 'table', columns: ['Line', 'names', 'temp'], rows: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
        { kind: 'output', label: 'Output', text: "['Chloe', 'Ben', 'Ava']", reveal: true },
      ],
    },
    script: [
      { say: 'We want to swap the first and last names. Let\'s trace it.' },
      { do: 'Line 1: write Ava, Ben, Chloe.', say: 'Line one makes the list.' },
      { do: 'Line 2: write Ava under temp.', say: 'Line two parks a copy of item 0, Ava, in temp.' },
      { do: 'Line 3. Pause 3 seconds.', say: 'Line three puts item 2 into item 0. What does the list look like now?' },
      { do: 'Write Chloe, Ben, Chloe.', say: 'Chloe, Ben, Chloe! Ava has been overwritten. The only copy of Ava is in temp.' },
      { do: 'Line 4: write Chloe, Ben, Ava.', say: 'Line four puts temp into item 2. Chloe, Ben, Ava. Swapped.' },
      { do: 'Cover line 2 with your hand. Write Chloe, Ben, Chloe.', say: 'Without temp, line four would copy Chloe into Chloe\'s place, and Ava would be lost for ever.' },
      { do: 'Press Space to show the output.', say: 'Notice Python shows lists with single quotes. That\'s just how it prints them.' },
    ],
  },
  {
    year: 8, lesson: 16, clip: 'fixBug', title: 'Changing lists', minutes: '2–3',
    board: {
      heading: 'The vanishing list',
      left: [
        { kind: 'code', label: 'Broken', code: 'shopping = ["bread"]\nshopping = shopping.append("milk")\nprint(shopping)' },
        { kind: 'output', label: 'It prints', text: 'None', reveal: true },
        { kind: 'code', label: 'Fixed', code: 'shopping = ["bread"]\nshopping.append("milk")\nprint(shopping)', reveal: true },
      ],
      right: [{ kind: 'output', label: 'Output', text: "['bread', 'milk']", reveal: true }],
    },
    script: [
      { say: 'No error message here, which makes it harder. The program just prints the wrong thing.' },
      { do: 'Press Space to show None.', say: 'It prints None. Where did our list go?' },
      { do: 'Circle shopping.append("milk") on line 2.', say: 'Append adds milk to the list. That bit works. But append doesn\'t hand anything back. It returns None.' },
      { do: 'Circle "shopping =" at the start of line 2. Draw an arrow showing None going into the box.', say: 'Then shopping equals takes that None and puts it in the shopping box. Our list, milk and all, is thrown away.' },
      { do: 'Pause 3 seconds.', say: 'How do we fix it?' },
      { do: 'Cross out "shopping =". Press Space for the fixed code, then the output.', say: 'Just delete shopping equals. Append changes the list by itself. Bread and milk.' },
    ],
  },
];
