// Kata: https://www.codewars.com/kata/520b9d2ad5c005041100000f

/* Description:
    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
    Examples

    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*/


// ********* My Solution *******

function pigIt(str) {
    const arr = str.split(/\s/);
    const items = [];

    for (item of arr) {
        const isSpecialCharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(item[0]);

        if (!isSpecialCharacter) {
            items.push([...(item.substr(1)).split(''), item[0], 'ay'].join(''));
        } else {
            items.push(item);
        }
    }

    return items.join(' ');
}