# ⚡ MATLAB Cheat Sheet — One Page to Rule Them All

## Basics
```matlab
x = 5;              % assign (semicolon = quiet)
% comment           % MATLAB ignores this
clc                 % clear screen
clear               % delete all variables
close all           % close all figure windows
help fname          % quick help   |   doc fname → full docs
```

## Math
```matlab
+ - * / ^           % arithmetic          2^3 → 8
sqrt(x) abs(x)      % root, absolute value
round floor ceil    % rounding (nearest / down / up)
mod(a, b)           % remainder            mod(7,2) → 1
pi                  % 3.14159...
```

## Vectors & Matrices
```matlab
v = [1 2 3]         % row vector
c = [1; 2; 3]       % column vector
M = [1 2; 3 4]      % 2×2 matrix
1:10                % 1..10        |  0:2:10  → 0 2 4 6 8 10
linspace(a,b,n)     % n evenly spaced points
zeros(m,n) ones(m,n)% pre-filled matrices
v(3)  v(end)  v(2:4)% indexing (STARTS AT 1!)
M(2,3) M(1,:) M(:,2)% (row, col); : = "all"
v'                  % transpose (flip row↔column)
v .* w   v ./ w   v .^ 2   % element-wise math — remember the DOT
v(v > 5)            % logical indexing: keep values > 5
```

## Common Functions
```matlab
sum mean median max min std        % statistics
length(v) size(M) numel(M)         % dimensions
sort(v)  sort(v,'descend')         % ordering
find(v > 5)  any(...)  all(...)    % searching / testing
unique(v)                          % remove duplicates
rand  randi(n)  randi(n,1,k)       % random numbers
```

## Strings & Output
```matlab
s = "hello";
upper lower strlength strrep        % text tools
s + " world"                        % join strings
num2str(42)   str2double("3.1")     % convert number↔text
disp(x)
fprintf("%s scored %d (avg %.2f)\n", name, runs, avg)
%   %s text   %d whole number   %f decimal   \n new line
x = input("Number? ");  s = input("Text? ", "s");
```

## Decisions
```matlab
if cond
    ...
elseif cond2
    ...
else
    ...
end
% compare: >  <  >=  <=  ==  ~=      (== asks, = assigns!)
% combine: && (and)  || (or)  ~ (not)

switch x
    case 1;  ...
    case 2;  ...
    otherwise; ...
end
```

## Loops
```matlab
for k = 1:10
    ...
end

while cond
    ...             % something inside must eventually make cond false!
end

break               % exit loop now
continue            % skip to next round
% Ctrl+C            % emergency stop for runaway loops
```

## Functions (file name = function name!)
```matlab
% in myfunc.m:
function [out1, out2] = myfunc(in1, in2)
% MYFUNC  One-line description (becomes 'help myfunc').
    out1 = ...;
    out2 = ...;
end
```

## Plotting
```matlab
plot(x, y, "r--o")            % color r b g k m | line - -- : -. | marker o s * ^
xlabel("..."); ylabel("..."); title("..."); grid on
hold on ... hold off          % overlay multiple lines
legend("A", "B")
bar scatter histogram pie     % other chart types
subplot(2,2,k)                % grid of charts
saveas(gcf, "fig.png")        % save figure
```

## Tables & Files
```matlab
T = table(col1, col2)
T.colname                     % get column
T.new = T.a ./ T.b            % add computed column
T(T.wins > 5, :)              % filter rows
sortrows(T, "col", "descend")
T = readtable("file.csv");  writetable(T, "out.csv")
```

## Emergency Kit 🚑
| Problem | Fix |
|---|---|
| Stuck in endless loop | **Ctrl+C** |
| "Undefined function or variable" | Typo? Case-sensitive! Did you run the line that creates it? |
| "Index exceeds array bounds" | Asking for position 7 of a 5-item vector — check `length(v)` |
| Matrix dimensions must agree | Sizes don't match; probably need `.*` instead of `*`, or a transpose `'` |
| Weird results from old runs | Start scripts with `clc; clear; close all;` |
