# ✅ Solutions

Only look here AFTER trying! Your solution may differ from mine and still be correct —
in coding there are many right answers.

---

## Lesson 1

```matlab
% 1.1
(15 + 25) * 3        % 120
% 1.2
2^10                 % 1024
% 1.3
sqrt(144)            % 12
% 1.4
round(2.5)           % 3 (rounds away from zero at .5)
```

## Lesson 2

```matlab
% 2.1
a = 12; b = 5;
a + b                % 17
a - b                % 7
a * b                % 60

% 2.2
my_name = "Pradeep";
disp(my_name)

% 2.3
balance = 1000;
balance = balance + 500;
balance = balance - 200;     % 1300

% 2.4
name = "Pradeep"; age = 25;
fprintf("I am %s and I am %d years old.\n", name, age)
```

## Lesson 3

```matlab
% 3.1
evens = 2:2:20

% 3.2
temps = [31 33 29 35 30 28 32];
temps(4)             % 35
temps(end)           % 32
temps(2:5)           % [33 29 35 30]

% 3.3
F = temps * 9/5 + 32

% 3.4
M = [1 2 3; 4 5 6];
size(M)              % [2 3]
M(2, :)              % [4 5 6]
M(:, 3)              % [3; 6]

% 3.5
hot = temps(temps > 30)     % [31 33 35 32]
```

## Lesson 4

```matlab
x = [4 8 15 16 23 42];
% 4.1
sum(x), mean(x), max(x), min(x)      % 108, 18, 42, 4
% 4.2
[m, i] = max(x)                      % m = 42, i = 6 (last position)
% 4.3
rolls = randi(6, 1, 20);
sum(rolls == 6)                      % varies — it's random!
% 4.4
find(x > 10)                         % [3 4 5 6]
% 4.5
upper("cricket is great")            % "CRICKET IS GREAT"
```

## Lesson 5

```matlab
% 5.1 — greeting.m
clc; clear;
name = input("What is your name? ", "s");
fprintf("Welcome, %s! Great to see you.\n", name)

% 5.2 — rectangle_calc.m
clc; clear;
w = input("Width? ");
h = input("Height? ");
fprintf("Area:      %.2f\n", w * h)
fprintf("Perimeter: %.2f\n", 2 * (w + h))
```

## Lesson 6

```matlab
% 6.1 + 6.2
n = input("Give me a number: ");
if n > 0
    disp("positive")
elseif n < 0
    disp("negative")
else
    disp("zero")
end
if mod(n, 2) == 0
    disp("even")
else
    disp("odd")
end

% 6.3
age = input("Age? ");
if age < 5
    price = 0;
elseif age <= 17
    price = 100;
elseif age <= 59
    price = 250;
else
    price = 150;
end
fprintf("Ticket price: Rs %d\n", price)

% 6.4
t = input("Temperature? ");
if t > 45 || t < -5
    disp("Extreme weather!")
else
    disp("Normal day")
end
```

## Lesson 7

```matlab
% 7.1
for k = 1:10
    fprintf("7 x %d = %d\n", k, 7 * k)
end

% 7.2
total = 0;
for n = 3:3:99
    total = total + n;
end
total                        % 1683
% (pro one-liner: sum(3:3:99))

% 7.3
height = 100; bounces = 0;
while height >= 1
    height = height * 0.6;
    bounces = bounces + 1;
end
bounces                      % 10

% 7.4
attempts = 0; roll = 0;
while roll ~= 6
    roll = randi(6);
    attempts = attempts + 1;
end
fprintf("Got a 6 after %d attempts\n", attempts)

% 7.5
for r = 1:5
    for c = 1:5
        fprintf("%4d", r * c)
    end
    fprintf("\n")            % new line after each row
end
```

## Lesson 8

```matlab
% 8.1 — square_it.m
function y = square_it(x)
    y = x^2;
end

% 8.2 + 8.5 — circle_stats.m
function [area, circ] = circle_stats(r)
    if r < 0
        error("Radius cannot be negative")
    end
    area = pi * r^2;
    circ = 2 * pi * r;
end

% 8.3 — is_even.m
function tf = is_even(n)
    tf = mod(n, 2) == 0;     % the comparison itself IS true/false
end

% 8.4 — toss_coin.m
function result = toss_coin()
    if randi(2) == 1
        result = "Heads";
    else
        result = "Tails";
    end
end
```

## Lesson 9

```matlab
% 9.1
x = linspace(-5, 5, 200);
plot(x, x.^3, "LineWidth", 1.5)
xlabel("x"); ylabel("y"); title("y = x^3"); grid on

% 9.2
x = linspace(0, 2*pi, 200);
plot(x, sin(x), "b-")
hold on
plot(x, cos(x), "r--")
hold off
legend("sin(x)", "cos(x)"); grid on

% 9.3
bar(1:5, [45 67 12 89 34])
xlabel("Match"); ylabel("Runs"); title("Runs per match")

% 9.4
histogram(randi(6, 1, 1000))
% Yes — roughly even bars: each face has equal chance (~167 each)

% 9.5
subplot(1, 2, 1); plot(x, x.^3);          title("Cubic")
subplot(1, 2, 2); bar(1:5, [45 67 12 89 34]); title("Runs")
```

## Lesson 10

```matlab
% 10.1
name    = ["Kohli"; "Rohit"; "Gill"; "Rahul"];
matches = [10; 10; 8; 9];
runs    = [520; 431; 289; 402];
T = table(name, matches, runs);
T.average = T.runs ./ T.matches;
T = sortrows(T, "average", "descend")

% 10.2
T(T.average > 35, :)

% 10.3 — see lessons/10-data-and-project.md, stages 1–5
%        and examples/toss_project.m for the complete program

% 10.4
toss_streak_odds(8, 10, 10000)    % ≈ 5.5% — uncommon but far from impossible
```
