# 🏋️ Practice Exercises

Do these AFTER each lesson. Struggle a bit before checking [solutions.md](solutions.md) —
the struggle is where learning happens!

---

## Lesson 1 — Getting Started

1.1 Calculate `(15 + 25) * 3` in the Command Window.
1.2 What is 2 to the power 10?
1.3 Use `sqrt` to find the square root of 144.
1.4 Type `help round` and read what it says. What does `round(2.5)` give?

## Lesson 2 — Variables

2.1 Create `a = 12` and `b = 5`. Compute their sum, difference, and product using the variables.
2.2 Create `my_name` holding your name as a string, then display it with `disp`.
2.3 Start with `balance = 1000;`. Using only `balance = balance ...` style lines,
    add 500, then subtract 200. What's left?
2.4 Use `fprintf` to print: `I am NAME and I am AGE years old.` using two variables.

## Lesson 3 — Vectors & Matrices

3.1 Create a vector of the even numbers from 2 to 20 using the colon operator.
3.2 Create `temps = [31 33 29 35 30 28 32]` (a week of temperatures).
    Get: the 4th day's value, the last day's value, and days 2–5.
3.3 Convert ALL of `temps` to Fahrenheit in one line: `F = C*9/5 + 32`.
3.4 Create the matrix `M = [1 2 3; 4 5 6]`. What is `size(M)`? Extract row 2. Extract column 3.
3.5 From `temps`, use logical indexing to get only the days hotter than 30.

## Lesson 4 — Built-in Functions

4.1 For `x = [4 8 15 16 23 42]`: find the sum, mean, max, and min.
4.2 Use `[m, i] = max(x)` — on which position does the maximum sit?
4.3 Simulate 20 dice rolls with `randi`. Count how many were 6.
4.4 For `x` above, use `find` to locate values greater than 10.
4.5 Turn `"cricket is great"` into ALL CAPS.

## Lesson 5 — Scripts

5.1 Write a script `greeting.m` that asks the user's name and prints a welcome message.
5.2 Write `rectangle_calc.m`: ask for width and height, print the area AND the perimeter,
    each with a clear label, using `fprintf`.
5.3 Add the professional header (`clc; clear; close all;`) and at least 3 comments
    to one of your scripts. Add a `%%` section split.

## Lesson 6 — Decisions

6.1 Write a script: ask for a number; print "positive", "negative", or "zero".
6.2 Extend it: also print "even" or "odd" (hint: `mod(n,2)`).
6.3 Ticket pricing: age < 5 → free; 5–17 → ₹100; 18–59 → ₹250; 60+ → ₹150.
    Ask the age, print the price. (Watch your `elseif` order!)
6.4 Ask for a temperature; if it's above 45 OR below -5, print "Extreme weather!",
    otherwise print "Normal day".

## Lesson 7 — Loops

7.1 Print the 7-times table (7, 14, ... 70) using a `for` loop and `fprintf`.
7.2 Sum all multiples of 3 between 1 and 100 with the accumulator pattern.
7.3 A ball drops from 100m; each bounce reaches 60% of the previous height.
    Use a `while` loop: how many bounces until the height is below 1m?
7.4 Roll a dice with `randi(6)` in a `while` loop until you get a 6. Count the attempts.
7.5 (Nested) Print a 5×5 multiplication table using two nested `for` loops.

## Lesson 8 — Functions

8.1 Write `square_it.m`: input one number, output its square.
8.2 Write `circle_stats.m`: input radius, outputs BOTH area and circumference.
8.3 Write `is_even.m`: input a number, output `true` or `false`.
8.4 Write `toss_coin.m`: no inputs, returns `"Heads"` or `"Tails"` randomly.
8.5 Add an `error(...)` check to `circle_stats.m` for negative radius.

## Lesson 9 — Plotting

9.1 Plot `y = x.^3` for x = -5 to 5 (use `linspace` for smoothness). Label everything.
9.2 Plot `sin(x)` and `cos(x)` together on x = 0 to 2π, different colors, with a legend.
9.3 Bar chart of runs `[45 67 12 89 34]` across matches 1–5.
9.4 Histogram of 1000 dice rolls (`randi(6, 1, 1000)`). Are the bars roughly even?
9.5 Use `subplot` to show exercises 9.1 and 9.3 side by side.

## Lesson 10 — Data & Project

10.1 Build a table of 4 cricketers: name, matches, runs. Add a `average` column
     (runs ./ matches). Sort by average, best first.
10.2 From your table, extract only players whose average exceeds 35.
10.3 Complete all 5 stages of the toss project in `toss_project.m`.
10.4 (Challenge) `toss_streak_odds(8, 10, 10000)` — how rare is winning 8 of 10 tosses?
