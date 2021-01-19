function solution(str){
  str = str.length%2===1 ? str + '_' : str;
  let newArr = [];
  for (let i=0; i<str.length; i++) {
    newArr.push(str[i] + str[i+1]);
    i++;
  }
  return newArr;
}

solution("abcdefg")


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']