# Year 8 Python Programming

A beginner course for a UK Year 8 student. The 16 lessons move from printing, variables and input to decisions, loops and lists. Each lesson has practice in a browser-based Python editor and links to the matching CodeBash challenges.

## Open the course

[Open the course on GitHub Pages](https://eltham-college-cs.github.io/year-8-python-programming/).

### Run a local copy

The local project includes a ready-to-use build in `dist/`. If you cloned the repository, build it first using the steps below. On a Mac with Python 3 installed, double-click **Start course.command** in Finder and open [the local course](http://127.0.0.1:8765/). Keep the Terminal window open during the lesson.

You can also open a terminal in this folder and run the following command. On Windows with the Python launcher installed, use `py -3` in place of `python3`.

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open [the local course](http://127.0.0.1:8765/) and select **Start lesson 1**. Python runs in the browser using the bundled Pyodide runtime. CodeBash and the linked lesson slides require internet access. CodeBash sign-in opens a separate website and the challenge instructions use its existing course and topic names.

## Progress

Choose **Lessons → Your progress → Download progress report (CSV)**. The report includes a row for each lesson with its status, coding tasks passed out of the total and the student's confidence rating. A task counts once the student selects **Check my code** and passes every test. A lesson is complete when all its tasks have passed at least once.

The editor and progress use browser storage. Use the same browser profile and course address each time. The CSV can be shared with a teacher and opened in Excel. It covers checks on this course and confidence ratings. CodeBash records its own results separately.

## Edit or rebuild

The course uses Astro, TypeScript and MDX. The pinned Pyodide runtime runs Python in a Web Worker. Use Node.js 22 or newer for development.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 8765
```

Stop the local launcher before using the dev server on the same port. Build the static course with `npm run build`. The build bundles the Python runtime and fonts, so the prepared `dist/` folder can be served locally offline. See [Adding a lesson](docs/ADDING-LESSONS.md) and [Videos](docs/VIDEOS.md) for course maintenance.

Pushes to `main` build and publish the course through GitHub Actions. The deployment uses the Pages site address and repository path supplied by GitHub. Local builds serve from the root address.

Adapted from [Eltham College Computer Science’s home-python project](https://github.com/eltham-college-cs/home-python).
