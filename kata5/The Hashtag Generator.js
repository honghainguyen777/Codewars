// The Hashtag Generator
function generateHashtag (str) {
  str = str.split(" ").filter(word => word);
  if (str.length === 0) return false;
  let newStr = "#" + str.map(word => word[0].toUpperCase() + word.substring(1)).join("");
  return newStr.length > 140 ? false : newStr;
}
// generateHashtag("")
generateHashtag("Codewars is nice")
// (" ".repeat(200)).replace(/ /g,'').length
generateHashtag(" ".repeat(200))
// generateHashtag("code" + " ".repeat(140) + "wars")
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false