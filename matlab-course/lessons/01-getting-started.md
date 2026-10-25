# Lesson 1: Getting Started — Your First Steps

## 1.1 What is MATLAB, really?

MATLAB = **MAT**rix **LAB**oratory. It's a program where you type instructions and the
computer does math, draws graphs, and analyzes data for you.

Think of it like a **super-calculator that understands English-like commands** and can
handle millions of numbers at once.

**What is "coding"?** Coding is just writing instructions for a computer, one line at a
time, in a language it understands. That's it. No magic.

## 1.2 The MATLAB screen (the 4 main areas)

When you open MATLAB you'll see:

```
┌────────────────┬─────────────────────────┬──────────────────┐
│                │                         │                  │
│  CURRENT       │   EDITOR                │   WORKSPACE      │
│  FOLDER        │   (where you write &    │   (shows your    │
│  (your files)  │    save code files)     │    variables)    │
│                ├─────────────────────────┤                  │
│                │   COMMAND WINDOW        │                  │
│                │   (type commands here,  │                  │
│                │    see results here)    │                  │
└────────────────┴─────────────────────────┴──────────────────┘
```

1. **Command Window** — where you type commands and see answers. It shows `>>` — that's
   the "prompt", MATLAB saying *"I'm ready, type something!"*
2. **Workspace** — a list of all the values you've stored (more on this in Lesson 2).
3. **Current Folder** — the files on your computer MATLAB can see.
4. **Editor** — opens when you write script files (Lesson 5).

**For now, we only use the Command Window.**

## 1.3 Your very first command

Click in the Command Window, type this, and press **Enter**:

```matlab
2 + 3
```

MATLAB replies:

```
ans =
     5
```

🎉 **Congratulations — you just coded!** `ans` means "answer" — MATLAB stores the last
result there automatically.

## 1.4 MATLAB as a calculator

Try each of these (press Enter after each line):

```matlab
10 - 4        % subtraction
6 * 7         % multiplication (use *, not x)
20 / 4        % division
2 ^ 3         % "power": 2 to the power 3 = 8
(2 + 3) * 4   % brackets work like in school math = 20
```

**What's the `%` symbol?** Everything after `%` is a **comment** — a note for humans.
MATLAB ignores it completely. You'll use comments to explain your code to yourself.

**Order of operations:** MATLAB follows the same BODMAS/PEMDAS rules you learned in
school: brackets first, then powers, then × ÷, then + −.

## 1.5 Some handy tricks right away

```matlab
pi            % MATLAB knows pi = 3.1416...
sqrt(16)      % square root of 16 = 4
abs(-7)       % absolute value = 7
```

- Press the **↑ (up arrow)** key: it brings back your previous commands. Huge time-saver!
- Type `clc` and press Enter: it **cl**ears the **c**ommand window (a fresh screen —
  nothing is deleted, just tidied).

## 1.6 When things go wrong (they will — and that's fine)

Type this deliberately wrong command:

```matlab
2 +* 3
```

MATLAB says something like: `Error: Invalid expression.` — it's not angry, it's just
telling you it didn't understand. **Read error messages — they usually point right at
the problem.** Every professional coder sees errors every single day.

## 1.7 Getting help — the most professional skill of all

```matlab
help sqrt     % short explanation of the sqrt command
doc sqrt      % opens the full illustrated documentation page
```

Pros don't memorize everything — they know how to look things up.

---

## ✅ What you learned

- MATLAB is a super-calculator you control by typing commands
- The Command Window and the `>>` prompt
- `+ - * / ^` and brackets
- `%` makes a comment (a note MATLAB ignores)
- `clc`, the ↑ key, and `help`

**Next:** [Lesson 2 — Variables & Data Types](02-variables-and-data.md), where you learn
to *store* values instead of just calculating them.
