# Lesson 8: Writing Your Own Functions

## 8.1 From tool user to tool maker

In Lesson 4 you *used* functions (`sum`, `mean`, `randi`). Now you'll *build* your own.

Why? When you find yourself copy-pasting the same chunk of code, wrap it in a function
instead. Write once, use forever. This is the single biggest step from beginner to
real programmer.

## 8.2 Anatomy of a function

Create a **new file** called `strike_rate.m` containing:

```matlab
function sr = strike_rate(runs, balls)
% STRIKE_RATE  Calculate a batsman's strike rate.
%   sr = strike_rate(runs, balls) returns runs per 100 balls.

    sr = runs / balls * 100;
end
```

Breaking it down:

```
function  sr  =  strike_rate(runs, balls)
   │       │            │        │
   │       │            │        └── inputs (arguments) the caller gives you
   │       │            └── the function's name (MUST match the file name!)
   │       └── output variable: whatever ends up in 'sr' gets returned
   └── keyword that says "this file is a function"
```

Now, from the Command Window or any script:

```matlab
strike_rate(89, 60)        % → 148.33
s = strike_rate(45, 30);   % store the answer
```

**Two golden rules:**
1. File name = function name (`strike_rate.m` ↔ `function ... strike_rate(...)`).
2. Inside the function, you must **assign a value to the output variable** (`sr = ...`).

## 8.3 Multiple inputs and multiple outputs

```matlab
function [avg, best, worst] = batting_summary(scores)
% BATTING_SUMMARY  Average, best and worst from a vector of scores.
    avg   = mean(scores);
    best  = max(scores);
    worst = min(scores);
end
```

Call it:

```matlab
[a, b, w] = batting_summary([45 67 12 89 34])
% a = 49.4,  b = 89,  w = 12
```

## 8.4 Functions live in their own bubble (scope)

This is crucial: **variables inside a function are invisible outside, and vice versa.**

```matlab
function y = double_it(x)
    secret = 42;      % exists ONLY inside this function
    y = x * 2;
end
```

After calling `double_it(5)`, there is no `secret` and no `x` in your Workspace.
The ONLY things that cross the bubble are the inputs (in) and outputs (out).

This is a feature, not a bug! It means functions can't accidentally mess with each
other's variables. Each function is a sealed, trustworthy machine.

## 8.5 Comment your functions — get help for free

The comment lines right after the `function` line become the help text:

```matlab
help strike_rate
%  STRIKE_RATE  Calculate a batsman's strike rate.
%    sr = strike_rate(runs, balls) returns runs per 100 balls.
```

Your functions now behave exactly like MATLAB's built-in ones. Very professional. 😎

## 8.6 Checking inputs (defensive programming)

Good functions refuse bad input politely:

```matlab
function sr = strike_rate(runs, balls)
    if balls <= 0
        error("balls must be a positive number")
    end
    sr = runs / balls * 100;
end
```

`error(...)` stops execution with your message. Catching bad input early, with a clear
message, beats a confusing crash three steps later.

## 8.7 Where do function files go?

Save function files in your **current folder** (the one shown top-left in MATLAB) —
then MATLAB finds them automatically. Keep a project's scripts and functions together
in one folder.

*(You can also define small functions at the bottom of a script file — "local
functions" — but one-function-per-file is clearer while learning.)*

---

## ✅ What you learned

- `function out = name(in1, in2)` ... `end`, saved as `name.m`
- Multiple outputs: `function [a, b] = ...`, called as `[x, y] = ...`
- Functions are sealed bubbles: only inputs/outputs pass through
- Help comments and `error(...)` for input checking

**Try it:** write `celsius_to_fahrenheit.m` (`f = c*9/5 + 32`). Then write
`toss_coin.m` that takes no inputs and returns the string `"Heads"` or `"Tails"`
randomly (hint: `randi(2)` + an `if`). You'll reuse it in the final project!

**Next:** [Lesson 9 — Plotting & Graphs](09-plotting.md), the fun one. 📈
