// Kata: https://www.codewars.com/kata/55f2b110f61eb01779000053

/* Description:
    Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

    Note: a and b are not ordered!
    Examples (a, b) --> output (explanation)

    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/


// ********* My Solution *******

function getSum(a, b) {
    if (a == b) return a;

    const min = a < b ? a : b;
    const max = a < b ? b : a;

    let count = 0;

    for (let i = min; i <= max; i++) {
        count += i;
    }

    return count;
}