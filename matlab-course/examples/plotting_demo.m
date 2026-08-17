% PLOTTING_DEMO  Lesson 9: line plots, styling, multiple charts.

clc; clear; close all;

%% Section 1: A decorated line plot
match = 1:10;
runs = [45 67 12 89 34 56 78 23 91 60];

figure
plot(match, runs, "b-o", "LineWidth", 1.5)
xlabel("Match number")
ylabel("Runs scored")
title("Season Performance")
grid on

%% Section 2: Two players on one chart
kohli = [45 67 12 89 34];
rohit = [56 23 78 45 90];

figure
plot(1:5, kohli, "b-o")
hold on
plot(1:5, rohit, "r-s")
hold off
legend("Kohli", "Rohit")
xlabel("Match"); ylabel("Runs"); title("Head to Head"); grid on

%% Section 3: Four chart types at once with subplot
figure
subplot(2, 2, 1); plot(match, runs);              title("Line: trend")
subplot(2, 2, 2); bar(1:5, kohli);                title("Bar: comparison")
subplot(2, 2, 3); scatter(kohli, rohit, "filled");title("Scatter: relationship")
subplot(2, 2, 4); histogram(randi(6, 1, 1000));   title("Histogram: distribution")

%% Section 4: Smooth math curves
x = linspace(0, 2*pi, 200);
figure
plot(x, sin(x), "b-", x, cos(x), "r--", "LineWidth", 1.5)
legend("sin(x)", "cos(x)")
title("Trigonometry, visualized"); grid on
