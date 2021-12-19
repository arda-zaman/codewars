// Kata: https://www.codewars.com/kata/52449b062fb80683ec000024

/* Description:
    The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!

    Here's the deal:

        It must start with a hashtag (#).
        All words must have their first letter capitalized.
        If the final result is longer than 140 chars it must return false.
        If the input or the result is an empty string it must return false.

    Examples

    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
*/


// ********* My Solution *******

function generateHashtag(str) {
    var s = str.toLowerCase().replace(/\s+/g, ' ');
    if (s.trim().length == 0) { return false; };

    let result = '';

    for (const word of s.split(/\s/)) {
        result += word[0].toUpperCase() + word.substr(1);
    }

    return result.length >= 140 ? false : `#${result}`;
}