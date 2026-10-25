# Lesson 2: Variables & Data Types — Storing Things

## 2.1 What is a variable?

A **variable** is a **labeled box** where you store a value so you can use it later.

```matlab
score = 250
```

Read this as: *"put the value 250 into a box labeled `score`."*

The `=` sign in coding does **NOT** mean "equals" like in math. It means
**"store into"** (we say "assign"). The value on the right goes into the name on the left.

Now the box exists — look at your **Workspace** panel, you'll see `score` listed there!
And you can use it:

```matlab
score + 50        % gives 300
score * 2         % gives 500
```

## 2.2 Changing what's in the box

```matlab
score = 250
score = 300       % the old 250 is thrown away, box now holds 300
score = score + 10  % take current value (300), add 10, store back → 310
```

That last line confuses every beginner. Remember: **right side first, then store into
the left side.** `score = score + 10` means "new score = old score + 10".

## 2.3 Rules for naming variables

✅ Allowed: letters, numbers, underscore. Must **start with a letter**.

```matlab
runs = 87
team_name_length = 5
over3 = 6.2
```

❌ Not allowed:

```matlab
3over = 6.2       % can't start with a number
my score = 10     % no spaces! use my_score
```

⚠️ MATLAB is **case-sensitive**: `Score`, `score`, and `SCORE` are three different boxes!

**Pro tip:** use meaningful names. `total_runs` is better than `x` — six months from now
you'll thank yourself.

## 2.4 The semicolon `;` — silence, please

```matlab
runs = 87         % MATLAB prints the result back at you
runs = 87;        % semicolon = "do it quietly, don't print"
```

Pros end almost every line with `;` and only leave it off when they *want* to see
the value. Try both and see the difference.

## 2.5 Types of data (the kinds of things boxes can hold)

### Numbers (the default — called `double`)

```matlab
price = 19.99;
count = 42;
```

### Text (called **strings**)

Use **double quotes**:

```matlab
team = "India";
city = "Chennai";
```

You can join strings:

```matlab
message = team + " won the toss!"   % "India won the toss!"
```

(You may also see 'single quotes' in older code — those are "character arrays", an older
style. For now, prefer "double quotes".)

### True/False (called **logical** values)

```matlab
is_raining = true;
match_over = false;
```

These become the heart of decision-making in Lesson 6.

## 2.6 Displaying things nicely

```matlab
disp("Hello!")                   % prints: Hello!
disp(score)                      % prints the value of score

name = "Pradeep";
fprintf("Hello %s, your score is %d\n", name, 95)
```

`fprintf` is "formatted print":
- `%s` = plug a **s**tring in here
- `%d` = plug a whole number (**d**igit) in here
- `%f` = plug a decimal number in here (`%.2f` = show 2 decimal places)
- `\n` = start a **n**ew line afterwards

This looks weird now; it will feel natural after you use it 5 times.

## 2.7 Housekeeping commands

```matlab
who           % list the names of all your variables
whos          % list them with details (size, type)
clear score   % delete the variable 'score'
clear         % delete ALL variables (careful!)
clc           % clear the screen (variables survive)
```

---

## ✅ What you learned

- Variables are labeled boxes: `name = value`
- `=` means "store", not "equals"
- Semicolon `;` = do it silently
- Data types: numbers, "strings", true/false
- `disp` and `fprintf` for printing, `clear`/`who` for housekeeping

**Try it:** create variables for your name, your age, and whether you like cricket
(true/false). Print a sentence using them with `fprintf`.

**Next:** [Lesson 3 — Vectors & Matrices](03-vectors-and-matrices.md) — MATLAB's true superpower.
