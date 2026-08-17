function pct = toss_streak_odds(wins_needed, n_games, n_experiments)
% TOSS_STREAK_ODDS  Chance of winning at least wins_needed of n_games tosses.
%   pct = toss_streak_odds(7, 10, 10000) simulates 10000 seasons of 10
%   fair coin tosses and returns the percentage of seasons with 7+ wins.

    if wins_needed > n_games
        error("wins_needed cannot exceed n_games")
    end

    count = 0;
    for k = 1:n_experiments
        if sum(randi(2, 1, n_games) == 1) >= wins_needed
            count = count + 1;
        end
    end
    pct = count / n_experiments * 100;
end
