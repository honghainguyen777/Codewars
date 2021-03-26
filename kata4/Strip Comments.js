// Strip Comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

function solution(input, markers) {
  return input.split("\n").map(str => {
    for (let marker of markers) {
      if (str.includes(marker)) return str.split(marker)[0].trim();
    }
    return str;
  }).join("\n")
};

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]) // "apples, plums\npears\noranges"

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"