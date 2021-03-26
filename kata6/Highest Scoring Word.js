// Highest Scoring Word
function high(x){
  let scores = 0;
  return x.split(" ").reduce((highestScoreWord, word, i, arr) => {
    const currentScores = word.split("").reduce((scr, char) => scr + (char.charCodeAt(0) - 96), 0);
    if (currentScores > scores) {
      highestScoreWord = word;
      scores = currentScores;
    }
    return highestScoreWord;
  },"")
}
high('man i need a taxi up to ubud');
// high('what time are we climbing up the volcano');
// "a".charCodeAt(0);
// "z".charCodeAt(0);

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.