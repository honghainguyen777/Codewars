
// More Zeros than Ones
// function moreZeros(s){
//   return [...s].filter((char, index, newArr) => {
//     let x = [...char.charCodeAt().toString(2)].reduce((obj, el) => {obj[el] = (obj[el] || 0) + 1; return obj},{});
//     return (x[0] > x[1] && newArr.indexOf(char) === index);
//   })
// }

// Shoter version
function moreZeros(s){
  return [...s].filter((char, index, newArr) => {
    let x = char.charCodeAt().toString(2)
    return (x.split('0').length > x.split('1').length && newArr.indexOf(char) === index);
  })
}

moreZeros('Great job!') //['a', ' ', 'b', '!']
// for (var i = 0; i < input.length; i++) {
//       output.value += input[i].charCodeAt(0).toString(2) + " ";
//   }

// res[char] = (res[char] || 0) + 1


// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.