% TOSS_PROJECT  Lesson 10 final project: Cricket Toss Simulator & Analyzer.
% Uses everything from the course: variables, vectors, if/else, loops,
% functions, plotting, and Monte Carlo simulation.
%
% Requires toss_streak_odds.m in the same folder (Stage 4b).

clc; clear; close all;

%% Stage 1: a single toss
toss = randi(2);                 % 1 = Heads, 2 = Tails
if toss == 1
    disp("Single toss: Heads!")
else
    disp("Single toss: Tails!")
end

%% Stage 2: 500 tosses, counted
n_tosses = 500;
results = randi(2, 1, n_tosses);

heads = sum(results == 1);
tails = sum(results == 2);
fprintf("\nOut of %d tosses:\n", n_tosses)
fprintf("  Heads: %d (%.1f%%)\n", heads, heads / n_tosses * 100)
fprintf("  Tails: %d (%.1f%%)\n", tails, tails / n_tosses * 100)

%% Stage 3: watch luck settle down (Law of Large Numbers)
running_heads_pct = cumsum(results == 1) ./ (1:n_tosses) * 100;

figure
plot(running_heads_pct, "b-", "LineWidth", 1.5)
hold on
yline(50, "r--", "Fair coin: 50%")
hold off
xlabel("Number of tosses")
ylabel("Heads %")
title("The Law of Large Numbers in Action")
grid on

%% Stage 4: how rare is winning 7 of 10 tosses?
n_experiments = 10000;
sevens_or_more = 0;

for k = 1:n_experiments
    ten = randi(2, 1, 10);                    % one "season" of 10 tosses
    if sum(ten == 1) >= 7
        sevens_or_more = sevens_or_more + 1;  % accumulator pattern
    end
end

fprintf("\nWon >=7 of 10 tosses in %.1f%% of %d simulated seasons.\n", ...
        sevens_or_more / n_experiments * 100, n_experiments)
disp("So a 7/10 toss streak is ordinary luck, not skill!")

%% Stage 5: explore with the reusable function
fprintf("\nOdds of at least N wins in 10 tosses:\n")
wins_needed = 5:10;
odds = zeros(1, length(wins_needed));
for i = 1:length(wins_needed)
    odds(i) = toss_streak_odds(wins_needed(i), 10, 10000);
    fprintf("  >=%2d of 10: %6.2f%%\n", wins_needed(i), odds(i))
end

figure
bar(wins_needed, odds)
xlabel("Wins needed (out of 10 tosses)")
ylabel("Chance (%)")
title("How lucky is a toss streak?")
grid on
