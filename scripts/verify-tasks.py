"""Run every task's model solution (from solutions.json, next to tasks.json) against its tests, the way the site's checker does.

Also runs each starter, so you can see which starters are meant to fail (fix the bug)
and which already pass (predict, then run).

    python3 scripts/verify-tasks.py
"""
import contextlib, glob, io, json, signal, sys


class Timeout(Exception):
    pass


def run(code, stdin):
    queue = [] if stdin == "" else stdin.split("\n")
    out = io.StringIO()

    def fake_input(prompt=""):
        out.write(str(prompt))
        if not queue:
            raise EOFError("EOF when reading a line")
        return queue.pop(0)

    def alarm(*_):
        raise Timeout()

    signal.signal(signal.SIGALRM, alarm)
    signal.alarm(2)
    error = None
    try:
        with contextlib.redirect_stdout(out):
            exec(compile(code, "main.py", "exec"), {"__name__": "__main__", "input": fake_input})
    except Timeout:
        error = "Timeout"
    except BaseException as e:
        error = f"{type(e).__name__}: {e}"
    finally:
        signal.alarm(0)
    return out.getvalue(), error


def norm(s):
    s = s.replace("\r\n", "\n")
    return s[:-1] if s.endswith("\n") else s


failures = 0
import os

checked = 0
for path in sorted(glob.glob("src/content/lessons/**/tasks.json", recursive=True)):
    lesson = path.split("lessons/")[1].rsplit("/", 1)[0]
    sol_path = path.replace("tasks.json", "solutions.json")
    if not os.path.exists(sol_path):
        # Solutions are kept out of the public repository, so CI has none to check.
        continue
    solutions = json.load(open(sol_path))
    checked += 1
    for task in json.load(open(path))["tasks"]:
        sol = solutions.get(task["id"])
        if sol is None:
            print(f"!! {lesson} {task['id']}: no solution")
            failures += 1
            continue
        for t in task["tests"]:
            got, err = run(sol, t["input"])
            if err or norm(got) != norm(t["output"]):
                failures += 1
                print(f"FAIL {lesson} {task['id']} input={t['input']!r}\n  expected={t['output']!r}\n  got={got!r} {err or ''}")
        results = [run(task["starter"], t["input"]) for t in task["tests"]]
        passes = sum(1 for (g, e), t in zip(results, task["tests"]) if not e and norm(g) == norm(t["output"]))
        first_err = next((e for _, e in results if e), "")
        print(f"ok   {lesson:58} {task['id']:20} starter passes {passes}/{len(task['tests'])} {first_err[:60]}")

if not checked:
    print("No solutions.json files found (they are git-ignored), so there is nothing to check.")
    sys.exit(0)
print("\nAll solutions pass." if not failures else f"\n{failures} problem(s).")
sys.exit(1 if failures else 0)
