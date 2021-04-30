// Turn String Input into Hash

// Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

function strToHash(str){
  return str.split(", ").map(el => el.split("=")).reduce((result, el) => {
    el[0] ? result[el[0]] = parseInt(el[1]) : null;
    return result;
  }, {})
}

strToHash("a=1, b=2, c=3, d=4");
strToHash("");
// "a=1, b=2, c=3, d=4"
// This string should return a hash that looks like

// { 'a': 1, 'b': 2, 'c': 3, 'd': 4}