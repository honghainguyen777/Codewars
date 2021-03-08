// Character with longest consecutive repetition

function longestRepetition(s) {
  let char = "";
  let count = 0;
  for (let i=0; i < s.length; i++) {
    let curCount = 1;
    for (let j = i+1; j < s.length; j++) {
      if (s[i] != s[j]) {
        break;
      }
      curCount++;
    }
    if (curCount > count) {
      char = s[i];
      count = curCount;
    }
  }
  return [char, count];
}


longestRepetition("bbbaaabaaaa");

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
