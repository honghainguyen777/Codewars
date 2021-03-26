// Convert string to camel case
// function toCamelCase(str){
//   const wordArr = str.includes("_") ? str.split("_") : str.split("-");
//   return wordArr.map((el, i) => i !==0 ? el[0].toUpperCase() + el.substring(1) : el).join("");
// }

// function toCamelCase(str){
//   return (str.includes("_") ? str.split("_") : str.split("-"))
//     .map((el, i) => i !==0 ? el[0].toUpperCase() + el.substring(1) : el).join("");
// }

function toCamelCase(str){
  return str.split(/-|_/g).map((el, i) => i !==0 ? el[0].toUpperCase() + el.substring(1) : el).join("");
}

toCamelCase("The-Stealth-Warrior"); // TheStealthWarrior
toCamelCase("A-B-C");
toCamelCase("the_stealth_warrior");
toCamelCase("")

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"