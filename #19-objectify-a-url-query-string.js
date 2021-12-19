// Kata:https://www.codewars.com/kata/5286d92ec6b5a9045c000087

/* Description:
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue

Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}

    You can expect valid input. You won't see input like:

    // This will NOT happen
    foo=1&foo.bar=2

    All properties and values will be strings — and the values should be left as strings to pass the tests.
    Make sure you decode the URI components correctly
*/


// ********* My Solution *******

function handleItem(obj, keys, value) {
    var key = keys.shift();

    if (keys.length === 0) {
        return obj[key] = value;
    }

    if (typeof obj[key] === 'undefined') {
        obj[key] = {};
    }

    handleItem(obj[key], keys, value);
}

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    if (!query) { return {} }
    const q = query.split('&');

    const obj = {};

    for (const item of q) {
        let value = decodeURIComponent(item.split('=')[1]);
        let key = item.split('=')[0];

        handleItem(obj, key.split('.'), value);
    }

    return obj;
}