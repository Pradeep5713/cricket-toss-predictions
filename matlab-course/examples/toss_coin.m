function result = toss_coin()
% TOSS_COIN  Flip a fair coin: returns "Heads" or "Tails" at random.
%   result = toss_coin()

    if randi(2) == 1
        result = "Heads";
    else
        result = "Tails";
    end
end
