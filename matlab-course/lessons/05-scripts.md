# Lesson 5: Scripts — Saving Your Code in Files

## 5.1 The problem with the Command Window

Everything you type in the Command Window vanishes when you close MATLAB. For anything
longer than 2–3 lines, you want to **save your work in a file** you can run again and
again, edit, and improve. That file is called a **script**.

A script is simply a text file ending in **`.m`** containing MATLAB commands, executed
top to bottom, exactly as if you typed them one by one.

## 5.2 Creating your first script

1. In MATLAB, click **New Script** (top-left) — the **Editor** opens.
2. Type this:

```matlab
% my_first_script.m
% My very first MATLAB script!

clc            % clear the screen
clear          % remove old variables (start fresh)

name = "Pradeep";
matches = [45 67 12 89 34];

fprintf("Hello %s!\n", name)
fprintf("Total runs: %d\n", sum(matches))
fprintf("Average:    %.1f\n", mean(matches))
fprintf("Best score: %d\n", max(matches))
```

3. Press **Save** and name it `my_first_script.m`
   (script names follow the same rules as variable names: no spaces, don't start with a number).
4. Press the green **Run ▶** button (or press **F5**).

All output appears in the Command Window. 🎉 You now have a saved, re-runnable program.

## 5.3 The professional script skeleton

Almost every good script starts like this:

```matlab
% WHAT THIS SCRIPT DOES: one-line description
% Author: you | Date: today

clc; clear; close all;
% clc       – clean screen
% clear     – forget old variables (prevents weird bugs from leftovers)
% close all – close any old figure/plot windows

% ... your actual code below ...
```

Starting fresh every run means your script's results depend only on the script itself —
this saves you from the #1 beginner mystery: *"it worked yesterday, why not today?!"*

## 5.4 Comments: your future self will thank you

```matlab
% This whole line is a comment

total = sum(runs);   % comments can sit after code too

%% Section titles start with two percent signs
```

`%%` creates a **section**. Sections matter because:
- The Editor draws a line between them — your code gets visual structure
- You can run ONE section alone: click inside it and press **Ctrl+Enter**

Pros write comments explaining **why**, not what: `x = x + 1  % move to next ball`
is better than `x = x + 1  % add 1 to x` (which we can already see).

## 5.5 Getting input from the user

Make your scripts interactive:

```matlab
age = input("How old are you? ");            % for numbers
name = input("What is your name? ", "s");    % "s" means expect text (a string)
fprintf("Hi %s, you are %d years old.\n", name, age)
```

## 5.6 When your script has a bug

- **Read the error message** — it tells you the line number! Click the underlined link
  in the error and MATLAB jumps to that exact line.
- Remove semicolons temporarily so you can *see* intermediate values.
- Add `disp(variable)` lines to peek inside variables mid-script.
- Run one section at a time with **Ctrl+Enter** to narrow down where it breaks.

This process is called **debugging** ("removing bugs"). It is 50% of real programming,
and everyone — including 30-year veterans — does it daily.

---

## ✅ What you learned

- Scripts are `.m` files that run top-to-bottom; **Run ▶** or **F5**
- The professional header: `clc; clear; close all;`
- `%` comments, `%%` sections, **Ctrl+Enter** to run one section
- `input(...)` to ask the user questions
- Basic debugging: read the error, print the values, isolate the section

**Try it:** write a script `bmi_calculator.m` that asks for weight (kg) and height (m),
computes `bmi = weight / height^2`, and prints it with 1 decimal place.

**Next:** [Lesson 6 — Making Decisions](06-if-else.md): if this, then that.
