# Lesson 7: Loops — Repeating Without Repeating Yourself

## 7.1 Why loops exist

Print "Ball 1 bowled", "Ball 2 bowled" ... up to "Ball 6 bowled". Would you write 6
nearly identical lines? What about 600? Computers exist to repeat boring work —
**loops** are how you ask.

## 7.2 The `for` loop — repeat a known number of times

```matlab
for ball = 1:6
    fprintf("Ball %d bowled\n", ball)
end
```

Output:

```
Ball 1 bowled
Ball 2 bowled
...
Ball 6 bowled
```

How it works:
1. `ball` takes the value **1**, body runs
2. `ball` becomes **2**, body runs again
3. ... continues through **6**, then the loop ends

`ball` is the **loop variable** — it changes automatically each round. The `1:6` is just
the colon vector from Lesson 3, so anything goes:

```matlab
for t = 10:-1:1          % countdown 10, 9, 8, ... 1
    fprintf("%d... ", t)
end
disp("LIFTOFF! 🚀")

for r = [45 67 12 89]    % loop directly over a vector of values
    fprintf("Scored %d runs\n", r)
end
```

## 7.3 The accumulator pattern (used everywhere)

Build up a result across loop rounds — e.g., adding numbers 1 to 100:

```matlab
total = 0;               % start the "running total" at zero — BEFORE the loop
for n = 1:100
    total = total + n;   % add this round's number to the running total
end
fprintf("Sum 1 to 100 = %d\n", total)    % 5050
```

The three-step recipe: **initialize before, update inside, use after.**
Counting works the same way (`count = count + 1` inside an `if`).

## 7.4 The `while` loop — repeat as long as something is true

Use `while` when you **don't know in advance** how many repeats you'll need:

```matlab
money = 100;
day = 0;
while money < 200            % keep going as long as this is true
    money = money * 1.05;    % 5% growth per day
    day = day + 1;
end
fprintf("Doubled after %d days\n", day)
```

⚠️ **Infinite loop warning:** if the condition never becomes false, the loop never
stops. Something inside the loop must move things toward the exit (here, `money`
keeps growing). If you get stuck, press **Ctrl+C** in the Command Window to force-stop.

**Which loop?** Known number of rounds → `for`. "Until something happens" → `while`.

## 7.5 Loop controls: `break` and `continue`

```matlab
% break = leave the loop immediately
for n = 1:1000
    if n * n > 500
        break            % found what we wanted, stop looping
    end
end
fprintf("First number whose square exceeds 500: %d\n", n)

% continue = skip the rest of THIS round, jump to the next round
for n = 1:10
    if mod(n, 2) == 0
        continue         % skip even numbers
    end
    fprintf("%d is odd\n", n)
end
```

## 7.6 Loops + vectors: storing results

Calculate the square of numbers 1–10 and keep them all:

```matlab
squares = zeros(1, 10);      % pre-create the storage ("preallocation")
for n = 1:10
    squares(n) = n^2;        % store this round's result in slot n
end
disp(squares)
```

**But wait — Lesson 3 says vectorize!** True:

```matlab
squares = (1:10).^2;         % same result, one line, faster
```

**The pro rule:** if a whole-vector operation exists, use it. Use loops when each step
depends on the previous one, or when doing complex things per item (like simulations).
Knowing both makes you flexible.

## 7.7 Nested loops (a loop inside a loop)

```matlab
for over = 1:3
    for ball = 1:6
        fprintf("Over %d, ball %d\n", over, ball)
    end
end
```

The inner loop completes ALL its rounds for EACH round of the outer loop → 18 lines.
This is how you visit every cell of a matrix (row loop outside, column loop inside).

---

## ✅ What you learned

- `for` = repeat a known number of times; `while` = repeat until a condition fails
- The accumulator pattern: initialize → update → use
- `break` (exit now), `continue` (skip to next round), **Ctrl+C** (emergency stop)
- Storing loop results in a preallocated vector
- Prefer vectorized one-liners when they exist

**Try it:** simulate a batsman: each ball he scores `randi([0 6])` runs. Loop until his
total reaches 100 and print how many balls the century took.

**Next:** [Lesson 8 — Writing Your Own Functions](08-functions.md).
