# Lesson 4: Built-in Functions — Ready-Made Tools

## 4.1 What is a function?

A **function** is a ready-made tool: you give it input(s), it gives you back output(s).

```
input  →  [ function ]  →  output
 16    →  [   sqrt   ]  →    4
```

The pattern is always: `output = function_name(input)`. The inputs go in round
brackets and are called **arguments**.

MATLAB ships with thousands of functions. You've already used some: `sqrt`, `disp`,
`sum`, `sort`, `size`. Here are the ones you'll use daily.

## 4.2 Statistics functions (your daily bread)

```matlab
runs = [45 67 12 89 34 67];

sum(runs)      % 314   – total
mean(runs)     % 52.33 – average
median(runs)   % 56    – middle value
max(runs)      % 89    – biggest
min(runs)      % 12    – smallest
std(runs)      % standard deviation (how spread out the values are)
```

### Getting TWO outputs at once

`max` can also tell you *where* the maximum is:

```matlab
[best, position] = max(runs)   % best = 89, position = 4 (4th match)
```

Square brackets on the *left* side collect multiple outputs. Many functions offer this.

## 4.3 Rounding functions

```matlab
round(3.7)    % 4     – nearest whole number
floor(3.7)    % 3     – always DOWN
ceil(3.2)     % 4     – always UP ("ceiling")
round(3.14159, 2)  % 3.14 – round to 2 decimal places
```

## 4.4 Random numbers (essential for simulations & games)

```matlab
rand          % random decimal between 0 and 1, e.g. 0.8147
rand(1, 5)    % a vector of 5 random decimals
randi(6)      % random whole number from 1 to 6 (a dice roll! 🎲)
randi(6, 1, 10)      % roll the dice 10 times
randi([50 100], 1, 5) % 5 random numbers between 50 and 100
```

We'll use `randi(2)` later to simulate a **coin toss** for the cricket project. 🏏

## 4.5 Functions that answer questions about vectors

```matlab
runs = [45 67 12 89 34 67];

length(runs)        % 6 – how many values
any(runs > 80)      % true  – is ANY value above 80?
all(runs > 10)      % true  – are ALL values above 10?
find(runs > 50)     % [2 4 6] – WHERE are the values above 50?
unique([1 2 2 3 3]) % [1 2 3] – remove duplicates
```

### Logical indexing — a pro move worth learning early

```matlab
runs(runs > 50)     % [67 89 67] – give me the VALUES above 50
```

Read it as: "from runs, keep only where runs > 50". This one-line filtering
replaces entire loops. Data analysts use it constantly.

## 4.6 Text functions

```matlab
name = "virat kohli";
upper(name)             % "VIRAT KOHLI"
lower("HELLO")          % "hello"
strlength(name)         % 11 (count of characters)
strrep(name, "virat", "V.")   % "V. kohli"  (string replace)
num2str(42)             % the number 42 becomes the text "42"
str2double("3.14")      % the text "3.14" becomes the number 3.14
```

## 4.7 How to discover functions yourself (the pro skill)

- `help mean` — quick description in the Command Window
- `doc mean` — full documentation with examples
- Google/search: *"matlab how to remove duplicates"* — MATLAB's docs are excellent
- In MATLAB, type a few letters then press **Tab** — it suggests completions

> 💡 Professionals don't memorize functions. They remember *that a function probably
> exists* and look up its name. After a month, the common ones stick automatically.

---

## ✅ What you learned

- Functions: `output = name(input)`; multiple outputs with `[a, b] = ...`
- Statistics: `sum, mean, median, max, min, std`
- Rounding: `round, floor, ceil`
- Randomness: `rand, randi`
- Question-askers: `any, all, find`, and **logical indexing** `v(v > 50)`
- Text tools: `upper, lower, strrep, num2str`

**Try it:** simulate rolling a dice 100 times with `randi(6,1,100)`. What's the mean?
How many times did you roll a 6? (Hint: `sum(rolls == 6)`)

**Next:** [Lesson 5 — Scripts](05-scripts.md): saving code in files like a real programmer.
