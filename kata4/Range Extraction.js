// Range Extraction
function solution(list){
  let newList = [];
  let indexes = [];
  for (let i=0; i<list.length; i++) {
    if (list[i]+1 !== list[i+1]) {
      indexes.push(i);
    }
  }
  if (indexes[0] < 2) {newList.push(list.slice(0, indexes[0]+1))}
  else newList.push(list.slice(0,indexes[0]+1));
  for (let i=0; i<indexes.length; i++) {
    newList.push(list.slice(indexes[i]+1, indexes[i+1]+1))
  }
  let text = "";
  newList.forEach(el => {
    let len = el.length;
    if (len < 3 && len !== 0 ) {
      text += el.join(",")+","
    } else if (len >= 3) {
      text += el[0]+"-"+el[len-1]+","
    }
  })
  return text[text.length-1] === ',' ? text.slice(0,text.length-1) : text;
}

// shorter one
// function solution(list){
//    for(var i = 0; i < list.length; i++){
//       var j = i;
//       while(list[j] - list[j+1] == -1) j++;
//       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
//   }
//   return list.join();
// }
solution([-3,-2,-1,2,10,15,16,18,19,20])
solution([-6, -5, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 22, 25]) // "-6,-3-1,3-5,7-11,14,15,17-20"


// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org