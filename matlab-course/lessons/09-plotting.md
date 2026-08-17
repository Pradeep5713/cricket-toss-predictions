# Lesson 9: Plotting & Graphs — Making Data Visible 📈

## 9.1 Your first plot

```matlab
match = 1:10;
runs  = [45 67 12 89 34 56 78 23 91 60];

plot(match, runs)
```

A **Figure window** pops up with a line graph: `plot(x, y)` puts the first vector on
the horizontal axis and the second on the vertical axis. That's the core of it —
everything else is decoration.

## 9.2 Decorating your plot (always do this!)

An unlabeled graph is a crime in science and business alike. 😄

```matlab
plot(match, runs)
xlabel("Match number")
ylabel("Runs scored")
title("My Season Performance")
grid on                       % adds background grid lines
```

## 9.3 Styling: colors, markers, line styles

The third argument to `plot` is a mini style code:

```matlab
plot(match, runs, "r--o")
%                  │ │ └── o : put a circle marker at each point
%                  │ └──── --: dashed line
%                  └────── r : red
```

| Colors | | Line styles | | Markers | |
|---|---|---|---|---|---|
| `r` | red | `-` | solid | `o` | circle |
| `b` | blue | `--` | dashed | `s` | square |
| `g` | green | `:` | dotted | `*` | star |
| `k` | black | `-.` | dash-dot | `^` | triangle |
| `m` | magenta | | | `.` | dot |

Mix and match: `"b:s"`, `"g-^"`, `"k*"` (markers only, no line).

## 9.4 Several lines on one graph

```matlab
kohli  = [45 67 12 89 34];
rohit  = [56 23 78 45 90];
m = 1:5;

plot(m, kohli, "b-o")
hold on                      % "hold" the figure — don't erase, ADD to it
plot(m, rohit, "r-s")
hold off

legend("Kohli", "Rohit")     % label the lines (in plotting order)
xlabel("Match"); ylabel("Runs"); title("Head to Head"); grid on
```

Without `hold on`, each `plot` erases the previous one. Forgetting `hold on` is
the classic plotting mistake — now you're immune.

## 9.5 Other chart types (each fits a purpose)

```matlab
bar(m, kohli)             % bar chart — comparing categories
scatter(kohli, rohit)     % scatter — is there a relationship between two things?
histogram(randn(1,1000))  % histogram — what's the distribution of values?
pie([60 40])              % pie chart — parts of a whole
```

Rule of thumb: **trend over time → plot · compare categories → bar ·
relationship → scatter · distribution → histogram · shares of total → pie.**

## 9.6 Multiple charts in one window

```matlab
subplot(2, 2, 1); plot(m, kohli);      title("Line")
subplot(2, 2, 2); bar(m, kohli);       title("Bar")
subplot(2, 2, 3); scatter(m, kohli);   title("Scatter")
subplot(2, 2, 4); histogram(kohli);    title("Histogram")
```

`subplot(2, 2, k)` divides the window into a 2×2 grid and draws in cell `k`
(counted left-to-right, top-to-bottom).

## 9.7 Plotting a math function

To plot y = sin(x), create many x points and compute y for all of them:

```matlab
x = linspace(0, 2*pi, 200);   % 200 points from 0 to 2π (smooth curve)
y = sin(x);
plot(x, y, "LineWidth", 2)    % thicker line
title("y = sin(x)"); grid on
```

More points = smoother curve. This x-then-y pattern is how ALL function plotting works.

## 9.8 Saving your masterpiece

```matlab
saveas(gcf, "my_chart.png")   % gcf = "get current figure"
```

Or use **File → Save As** in the figure window. `close all` closes every figure window.

---

## ✅ What you learned

- `plot(x, y, "style")` + always `xlabel`, `ylabel`, `title`, `grid on`
- `hold on` to overlay lines, `legend` to name them
- `bar`, `scatter`, `histogram`, `pie` — and when each is the right choice
- `subplot` for grids of charts, `saveas` to export

**Try it:** plot `y = x^2` and `y = 2^x` on the same graph for x = 0 to 6
(use `x.^2` and `2.^x` — remember the dot!). Add a legend. Where do they cross?

**Next:** [Lesson 10 — Real Data + Final Project](10-data-and-project.md) 🏏
