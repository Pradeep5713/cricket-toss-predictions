% VECTORS_DEMO  Lessons 3-4: vectors, indexing, whole-list math, functions.

clc; clear; close all;

%% Section 1: Building vectors
runs = [45 67 12 89 34]          % scores from 5 matches
overs = 1:20                     % 1, 2, ..., 20
evens = 0:2:10                   % 0 2 4 6 8 10

%% Section 2: Indexing (positions start at 1!)
runs(1)                          % first score
runs(end)                        % last score
runs(2:4)                        % scores 2 to 4

%% Section 3: Whole-vector math — no loop needed!
balls = [30 50 10 60 25];
strike_rates = runs ./ balls * 100   % element-wise: note the DOT

%% Section 4: Statistics in one line each
fprintf("Total runs:  %d\n", sum(runs))
fprintf("Average:     %.1f\n", mean(runs))
[best, match_no] = max(runs);
fprintf("Best score:  %d (match %d)\n", best, match_no)

%% Section 5: Logical indexing — pro filtering
good_games = runs(runs > 40)     % only the scores above 40
fprintf("Scored 40+ in %d of %d matches\n", sum(runs > 40), length(runs))
