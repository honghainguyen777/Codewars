// Number of anagrams in an array of words

function anagramCounter (wordsArray) {
  let count = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i].split("").sort().join("");
    for (let j = i+1; j < wordsArray.length; j++) {
      if (wordsArray[j].split("").sort().join("") === word) count++
    }
  }
  return count;
}

anagramCounter(['dell', 'ledl', 'abc', 'cba']);


// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// ALGORITHMS