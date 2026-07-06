# Lesson 6: Making Decisions — if / else

## 6.1 Computers can choose

So far your code runs every line, always. Real programs make **decisions**:

> *IF it's raining → take an umbrella, OTHERWISE → wear sunglasses.*

In MATLAB:

```matlab
if is_raining
    disp("Take an umbrella!")
else
    disp("Wear sunglasses!")
end
```

Structure:
- `if` + a condition (something true or false)
- the code to run when it's **true**
- optional `else` + code for when it's **false**
- `end` closes the block (MATLAB needs to know where the decision stops)

The indentation (spaces at line start) isn't required, but **always do it** — it makes
the structure visible. The Editor does it for you (select code, press Ctrl+I).

## 6.2 Comparisons — asking true/false questions

| Symbol | Meaning | Example | Result |
|--------|---------|---------|--------|
| `>` | greater than | `5 > 3` | true |
| `<` | less than | `5 < 3` | false |
| `>=` | greater or equal | `5 >= 5` | true |
| `<=` | less or equal | `4 <= 3` | false |
| `==` | **is equal to** | `5 == 5` | true |
| `~=` | not equal to | `5 ~= 3` | true |

⚠️ **The #1 beginner bug in all of programming:**
- `=` stores a value (`x = 5` → "put 5 in x")
- `==` asks a question (`x == 5` → "is x 5? true/false")

Using `=` inside an `if` is an error. Burn this into memory now and save yourself hours.

## 6.3 Multiple choices: elseif

```matlab
marks = 78;

if marks >= 90
    disp("Grade A — outstanding!")
elseif marks >= 75
    disp("Grade B — well done")
elseif marks >= 50
    disp("Grade C — passed")
else
    disp("Failed — try again")
end
```

MATLAB checks top to bottom and runs **only the first true branch**, then jumps to `end`.
Order matters: put the strictest condition first.

## 6.4 Combining conditions: AND, OR, NOT

| Symbol | Meaning | True when... |
|--------|---------|--------------|
| `&&` | AND | **both** sides are true |
| `\|\|` | OR | **at least one** side is true |
| `~` | NOT | flips true↔false |

```matlab
temp = 32; humidity = 80;

if temp > 30 && humidity > 70
    disp("Hot AND sticky — stay inside")
end

if temp > 40 || temp < 0
    disp("Extreme weather!")
end

if ~is_raining
    disp("No rain — match is ON! 🏏")
end
```

## 6.5 A real example: coin toss decision 🏏

```matlab
toss = randi(2);        % 1 or 2, randomly

if toss == 1
    disp("Heads — India wins the toss!")
else
    disp("Tails — Australia wins the toss!")
end
```

Run it several times — the answer changes because `randi` is random. You've just built
the seed of your final project.

## 6.6 switch — a tidier if/elseif for exact matches

When you're comparing one variable against a list of exact values:

```matlab
day = "Saturday";

switch day
    case "Saturday"
        disp("Weekend! 🎉")
    case "Sunday"
        disp("Weekend! 🎉")
    otherwise
        disp("Work day 😅")
end
```

Use `switch` for exact matching, `if/elseif` for ranges (`>=`, `<`, combos).

---

## ✅ What you learned

- `if / elseif / else / end` — only the first true branch runs
- Comparisons: `> < >= <= == ~=` — and the critical `=` vs `==` difference
- Combining: `&&` (and), `||` (or), `~` (not)
- `switch/case` for exact-value menus

**Try it:** write a script that asks the user for a number and prints whether it's
positive, negative, or zero. Bonus: also say whether it's even or odd
(hint: `mod(n, 2) == 0` means even — `mod` gives the remainder after division).

**Next:** [Lesson 7 — Loops](07-loops.md): making the computer repeat work.
