% BASICS_DEMO  Lessons 1-2: calculator, variables, printing.
% Open in MATLAB and press Run (or F5). Better: run section-by-section
% with Ctrl+Enter and watch what each part does.

clc; clear; close all;

%% Section 1: MATLAB as a calculator
disp("--- Calculator ---")
2 + 3
10 / 4
2 ^ 10
sqrt(144)

%% Section 2: Variables — labeled boxes
disp("--- Variables ---")
runs = 87;              % semicolon = quiet
balls = 60;
strike_rate = runs / balls * 100    % no semicolon = show me

%% Section 3: Updating a variable
score = 100;
score = score + 50;     % right side first, THEN store: 150
score = score * 2;      % 300
fprintf("Final score: %d\n", score)

%% Section 4: Strings and printing
player = "Kohli";
team = "India";
message = player + " plays for " + team;
disp(message)
fprintf("%s scored %d off %d balls (SR %.1f)\n", player, runs, balls, strike_rate)
