// Reverse words in a given string
// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
function reverseWords(str) {
  const arrayOfWords = str.split(".");
  const newArray = [];
  for (let i = arrayOfWords.length-1; i >= 0; i--) {
    newArray.push(arrayOfWords[i]);
  }
  return newArray.join(".");
}

reverseWords("i.like.this.program.very.much")
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i