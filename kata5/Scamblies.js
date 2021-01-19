// function scramble(str1, str2) {
// //   if (str1.length < str2.length) return false;
//   let count = 0;
//   for (let char of str2) {
//     let ind = str1.indexOf(char)
//     if (ind > -1) {
//       count++;
//       str1 = str1.replace(char, '', 1); 
//     } else break;
//   }
//   return count === str2.length ? true : false
// }
// function scramble(str1, str2) {
//   let constructedStr1 = [...str1].reduce((acc,char) => {
//     acc[char] = acc[char] ? acc[char] + 1 : 1;
//     return acc;
//   }, {});
//   let constructedStr2 = [...str2].reduce((acc,char) => { acc[char] = acc[char] ? acc[char] + 1 : 1; return acc}, {});
//   for (let key in constructedStr2) {
//     if (constructedStr1[key] == null || constructedStr2[key] > constructedStr1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

function scramble(str1, str2) {
  let constructedStr1 = [...str1].reduce((acc,char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});
  for (let char of str2) {
    if (constructedStr1[char] < 1 || constructedStr1[char] == null) {
      return false;
    } else {
      constructedStr1[char] -= 1;
    }
  }
  return true;
}

scramble('cedewaraaossoqqyt','codewars')


// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False