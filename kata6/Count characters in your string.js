// Count characters in your string

function count (string) {
  return [...string].reduce((obj, el) => {
    obj[el] = obj[el] === undefined ? 1 : obj[el] + 1;
    return obj;
  }, {})
}
count("gdgfdaba");

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.