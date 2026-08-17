% CONTROL_FLOW_DEMO  Lessons 6-7: if/else decisions and loops.

clc; clear; close all;

%% Section 1: A simple decision
temperature = 34;
if temperature > 30
    disp("It's hot — drink water!")
else
    disp("Pleasant weather.")
end

%% Section 2: Grades with elseif (order matters!)
marks = 78;
if marks >= 90
    grade = "A";
elseif marks >= 75
    grade = "B";
elseif marks >= 50
    grade = "C";
else
    grade = "F";
end
fprintf("Marks %d -> Grade %s\n", marks, grade)

%% Section 3: A for loop — one over of cricket
for ball = 1:6
    hit = randi([0 6]);          % random runs off this ball
    fprintf("Ball %d: %d run(s)\n", ball, hit)
end

%% Section 4: Accumulator pattern — total the over
total = 0;
for ball = 1:6
    total = total + randi([0 6]);
end
fprintf("Runs this over: %d\n", total)

%% Section 5: while loop — bat until the century
score = 0;
balls_faced = 0;
while score < 100
    score = score + randi([0 6]);
    balls_faced = balls_faced + 1;
end
fprintf("Century! Reached %d off %d balls.\n", score, balls_faced)
