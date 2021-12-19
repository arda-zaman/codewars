// Kata: https://www.codewars.com/kata/530e15517bc88ac656000716

/* Description:
    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/


// ********* My Solution *******

function rot13(message) {
    let str = '';
    for (const char of message.split('')) {
        const charCode = char.charCodeAt();
        const max = /[a-z]/.test(char) ? 122 : 90;

        if (/[^a-zA-Z]/.test(char)) {
            str += char;
        } else {
            const process = charCode + 13 > max;
            str += String.fromCharCode(process ? charCode - 13 : charCode + 13);
        }
    }

    return str;
}