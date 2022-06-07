# sum-digits-to-consecutive-powers
This function looks at the range of numbers between two given integers a & b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the following property:

1 = 1^1

2 = 2^1

3 = 3^1

89 = 8^1 + 9^2

135 = 1^1 + 3^2 + 5^3

Let's see some cases:

sumDigPow(1, 10) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

sumDigPow(90, 100) -> []
