// Backspaces in string

function cleanString(s) {
  return s.split("").reduce((arr, char) => {
    return char === "#" ? arr.slice(0, -1) : arr + char
  }, "")
};


cleanString('abc####d##c#'); // ""
cleanString('abc#d##c') // "ac"
  

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""