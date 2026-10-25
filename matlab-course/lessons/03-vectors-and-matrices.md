# Lesson 3: Vectors & Matrices — MATLAB's Superpower

## 3.1 Why this lesson matters most

So far, one box = one value. But real data comes in **lists**: runs scored in 10 matches,
temperatures for 30 days, prices of 100 stocks. MATLAB was *built* for this.

- A **vector** = a list of numbers.
- A **matrix** = a grid (table) of numbers, with rows and columns.

## 3.2 Making a vector

Use square brackets `[ ]`:

```matlab
runs = [45 67 12 89 34]      % runs in 5 matches (spaces separate values)
runs = [45, 67, 12, 89, 34]  % commas work too — same thing
```

This is a **row vector** (values side by side). A **column vector** uses semicolons:

```matlab
col = [45; 67; 12; 89; 34]   % values stacked vertically
```

## 3.3 Quick ways to build vectors

```matlab
a = 1:10          % 1 2 3 4 5 6 7 8 9 10  (the colon means "from:to")
b = 0:2:10        % 0 2 4 6 8 10          (from : step : to)
c = 10:-1:1       % countdown 10 down to 1
d = linspace(0, 1, 5)  % 5 evenly spaced points from 0 to 1
e = zeros(1, 5)   % [0 0 0 0 0]
f = ones(1, 3)    % [1 1 1]
```

The colon `:` operator is used constantly in MATLAB. Learn it well.

## 3.4 Picking values out (indexing)

Each position in a vector has a number, starting from **1** (not 0!):

```matlab
runs = [45 67 12 89 34];
runs(1)       % first value → 45
runs(3)       % third value → 12
runs(end)     % last value → 34   ('end' means "the last position")
runs(2:4)     % positions 2 to 4 → [67 12 89]
runs([1 5])   % positions 1 and 5 → [45 34]
```

You can also **change** a value:

```matlab
runs(3) = 15;    % third match score corrected to 15
```

## 3.5 Math on the whole list at once (this is the magic ✨)

```matlab
runs = [45 67 12 89 34];
runs + 10        % adds 10 to EVERY value → [55 77 22 99 44]
runs * 2         % doubles EVERY value
runs / 6         % run rate per over for every match, in one line!
```

No loops needed. One line operates on the whole list. This is called **vectorization**
and it's why scientists and engineers love MATLAB.

### Element-by-element math between two vectors: the dot `.`

```matlab
balls = [30 50 10 60 25];
strike_rate = runs ./ balls * 100   % divide each run by each ball
```

Rule of thumb for beginners: when multiplying/dividing/powering **two vectors
element-by-element**, use `.*`, `./`, `.^` (with the dot).
Plain `*` between matrices means *matrix multiplication* — a linear algebra operation
you don't need yet.

## 3.6 Matrices — grids of numbers

Semicolon `;` inside brackets means "new row":

```matlab
M = [1 2 3; 4 5 6; 7 8 9]
% M =
%      1     2     3
%      4     5     6
%      7     8     9
```

Indexing uses `(row, column)`:

```matlab
M(2, 3)      % row 2, column 3 → 6
M(1, :)      % ALL of row 1 → [1 2 3]      (: means "everything")
M(:, 2)      % ALL of column 2 → [2; 5; 8]
size(M)      % [3 3] → 3 rows, 3 columns
```

## 3.7 Useful vector tools

```matlab
length(runs)     % how many values? → 5
sum(runs)        % total → 247
sort(runs)       % smallest to largest
sort(runs, 'descend')   % largest to smallest
runs'            % the apostrophe flips row↔column (transpose)
[runs 100]       % stick 100 on the end → grow the vector
```

---

## ✅ What you learned

- Vectors `[1 2 3]`, column vectors `[1; 2; 3]`, matrices `[1 2; 3 4]`
- Building with `start:step:end`, `zeros`, `ones`, `linspace`
- Indexing starts at **1**; `end` is the last item; `:` means "all"
- Whole-list math, and the dot operators `.*` `./` `.^`

**Try it:** make a vector of your last 7 days of phone screen-time hours. Find the total
with `sum`, then pick out the weekend values with indexing.

**Next:** [Lesson 4 — Built-in Functions](04-built-in-functions.md).
