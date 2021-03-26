// Roman Numerals Encoder

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
function solution(number){
  let romanLetters = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  let result = "";
  while(number > 0) {
    for (letter in romanLetters) {
      if (number >= romanLetters[letter]) {
        result += letter;
        number -= romanLetters[letter];
        break;
      }
    }
  }
  return result;
}


// function solution(number){
//   let currentNum = number;
//   let result = "";
//   for (let i=number.toString().length - 1; i >= 0; i--) {
//     const digit = Math.floor(currentNum/Math.pow(10, i));
//     if (i === 3) result += "M".repeat(digit);
//     if (i === 2 && currentNum >= 900) result += "CM"
//     if (i === 2 && currentNum >= 500 && currentNum < 900) result += ("D" + "C".repeat(digit - 5));
//     if (i === 2 && currentNum < 500 && currentNum >= 400) result += "CD";
//     if (i === 2 && currentNum < 400) result += "C".repeat(digit);
//     if (i === 1 && currentNum >= 90) result += "XC";
//     if (i === 1 && currentNum < 90 && currentNum >= 50) result += ("L" + "X".repeat(digit - 5));
//     if (i === 1 && currentNum >= 40 && currentNum < 50) result += "XL";
//     if (i === 1 && currentNum < 40) result += "X".repeat(digit);
//     if (i === 0 && currentNum >= 9) result += "IX";
//     if (i === 0 && currentNum < 9 && currentNum >= 5) result += ("V" + "I".repeat(digit - 5));
//     if (i === 0 && currentNum < 5 && currentNum >= 4) result += "IV";
//     if (i === 0 && currentNum < 4) result += "I".repeat(digit);
//     currentNum = currentNum%Math.pow(10, i);
//   }
//   return result;
// }
// Example:
// solution(1000); // should return 'M'
// solution(9); //'IX'
solution(1666); // MDCLXVI
solution(1990); // MCMXC
solution(500);

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.