// Reverse a Number

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
function reverseNumber(n) {
  return (n < 0 ? -1 : 1) * Math.abs(n).toString().split("").reverse().join("");
}

// function reverseNumber(n) {
//   const isNegative = n < 0;
//   const digitsOnly = Number((isNegative ? n.toString().split("").slice(1) : n.toString().split("")).reverse().join(""));
//   return isNegative ? -digitsOnly : digitsOnly;
// }

// Examples
reverseNumber(-4321234) // 4321234
//  123 ->  321
// -456 -> -654
// 1000 ->    1