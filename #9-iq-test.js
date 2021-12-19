// Kata: https://www.codewars.com/kata/552c028c030765286c00007d

/* Description: */


// ********* My Solution *******

function iqTest(n) {
    let even = 0, odd = 0;
    let numbers = n.split(' ');

    for (const [idx, n] of numbers.entries()) {
        if (odd >= 1 && even >= 1 && odd !== even) {
            break;
        }

        if (n % 2 === 0) even++
        else odd++;
    }

    const idx = numbers.findIndex((p) => {
        return (
            even == 1 && p % 2 === 0 ||
            odd == 1 && p % 2 === 1
        );
    });

    return idx + 1;
}