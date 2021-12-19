// Kata: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

/* Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/


// ********* My Solution *******

function findUniq(arr) {
    const numbers = {};

    for (const n of arr) {
        if (!Object.keys(numbers).includes(`n_${n}`)) {
            numbers[`n_${n}`] = 1;
        } else {
            numbers[`n_${n}`] += 1;
        }

        const nmb = Object.values(numbers);
        if (nmb.includes(2) && nmb.includes(1)) {
            break;
        }
    }

    return parseFloat(
        Object.keys(numbers)[Array.from(Object.values(numbers)).indexOf(1)].replace('n_', '')
    );
}