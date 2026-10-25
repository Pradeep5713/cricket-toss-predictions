# Lesson 10: Real Data + Final Project 🏏

The last stretch! First we meet **tables** (spreadsheet-like data), then you build a
complete **Cricket Toss Simulator & Analyzer** using everything from lessons 1–9.

## 10.1 Tables — spreadsheets inside MATLAB

Real data has mixed types: names (text), scores (numbers), dates. Vectors can't mix
types — **tables** can:

```matlab
team    = ["India"; "Australia"; "England"; "Pakistan"];
matches = [12; 10; 11; 9];
wins    = [9; 6; 5; 4];

T = table(team, matches, wins)
```

```
      team       matches    wins
    _________    _______    ____
    "India"        12         9
    "Australia"    10         6
    "England"      11         5
    "Pakistan"      9         4
```

### Working with tables

```matlab
T.wins                        % grab one column (dot + column name)
T.win_rate = T.wins ./ T.matches;   % ADD a new calculated column!
T(1, :)                       % first row (all columns)
T(T.wins > 5, :)              % logical indexing works: teams with >5 wins
sortrows(T, "wins", "descend")      % sort the table by a column
```

## 10.2 Reading & writing files

```matlab
T = readtable("results.csv");   % read a CSV/Excel file into a table
writetable(T, "output.csv");    % save a table to a file
```

One line each. If you ever analyze data for work or study, this is how it starts.

## 10.3 FINAL PROJECT: Cricket Toss Simulator & Analyzer

**Goal:** simulate hundreds of coin tosses, analyze the results, and answer a real
question: *"my team won 7 of the last 10 tosses — is that lucky, or normal?"*

Create `toss_project.m`. Build it **stage by stage** — run after every stage!

### Stage 1 — one toss (Lessons 4 & 6)

```matlab
clc; clear; close all;

toss = randi(2);                 % 1 = Heads, 2 = Tails
if toss == 1
    disp("Heads!")
else
    disp("Tails!")
end
```

### Stage 2 — many tosses + counting (Lesson 7)

```matlab
n_tosses = 500;
results = randi(2, 1, n_tosses);     % 500 tosses in one line — vectorized!

heads = sum(results == 1);           % logical indexing counts for us
tails = sum(results == 2);
fprintf("Heads: %d (%.1f%%)\n", heads, heads/n_tosses*100)
fprintf("Tails: %d (%.1f%%)\n", tails, tails/n_tosses*100)
```

### Stage 3 — does luck settle down? (Lesson 9)

Watch the heads-percentage wobble early and settle near 50%:

```matlab
running_heads_pct = cumsum(results == 1) ./ (1:n_tosses) * 100;
% cumsum = cumulative sum: after each toss, how many heads so far

plot(running_heads_pct, "b-", "LineWidth", 1.5)
hold on
yline(50, "r--", "Fair coin: 50%")   % reference line
hold off
xlabel("Number of tosses"); ylabel("Heads %")
title("The Law of Large Numbers in Action")
grid on
```

📈 Early on, the line swings wildly. By toss 500, it hugs 50%. **This is why short
streaks mean nothing — and it's the honest answer behind every "toss prediction".**

### Stage 4 — how rare is 7-out-of-10? (everything combined)

```matlab
n_experiments = 10000;
sevens_or_more = 0;

for k = 1:n_experiments
    ten = randi(2, 1, 10);          % one "season" of 10 tosses
    if sum(ten == 1) >= 7
        sevens_or_more = sevens_or_more + 1;   % accumulator pattern!
    end
end

fprintf("Won >=7 of 10 tosses in %.1f%% of experiments\n", ...
        sevens_or_more/n_experiments*100)
```

Result: about **17%** — roughly 1 in 6. Winning 7 of 10 tosses isn't special at all!
You just used simulation to answer a probability question — a genuine data-science
technique called the **Monte Carlo method**.

### Stage 5 — wrap it in a function (Lesson 8)

Create `toss_streak_odds.m`:

```matlab
function pct = toss_streak_odds(wins_needed, n_games, n_experiments)
% TOSS_STREAK_ODDS  Chance of winning at least wins_needed of n_games tosses.
    count = 0;
    for k = 1:n_experiments
        if sum(randi(2, 1, n_games) == 1) >= wins_needed
            count = count + 1;
        end
    end
    pct = count / n_experiments * 100;
end
```

Now explore from the Command Window:

```matlab
toss_streak_odds(7, 10, 10000)    % ~17%
toss_streak_odds(10, 10, 10000)   % ~0.1% — 10/10 IS special
toss_streak_odds(70, 100, 10000)  % ~0.004% — scale changes everything
```

### 🏆 Challenge extensions (optional, for glory)

1. Ask the user for their prediction (`input`) before each toss and track their accuracy.
2. Put the results of `toss_streak_odds` for `wins_needed = 5:10` into a **bar chart**.
3. Store 5 teams' toss records in a **table**, add a win-rate column, and sort it.

---

## 🎓 You did it — now what?

You now know: variables, vectors, matrices, functions (using AND writing), if/else,
loops, plotting, tables, and simulation. That's a genuinely solid foundation.

**Where to go next (all free):**
- **MATLAB Onramp** — official free interactive course (~2 hrs): https://matlab.mathworks.com/onramp
- **MATLAB Fundamentals** — the free follow-up on the same site
- **Cody** — MATLAB coding puzzles, from easy to fiendish: https://www.mathworks.com/matlabcentral/cody
- Then pick a direction: data analysis, Simulink (engineering), image processing,
  machine learning — MATLAB has free Onramp mini-courses for each.

**The real secret:** you learn coding by *doing projects you care about*. Predict
something. Analyze your own data. Automate something boring. Get stuck, search, fix,
repeat. That loop — not any course — is what makes you a pro. 🚀
