// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let uniqueNumArr = [...new Set(A)];
  console.log(uniqueNumArr);
  for (let uniqNum of uniqueNumArr) {
    let count = 0;
    for (let num of A) {
      count += 1 ? num===uniqNum : 0;
    }
    if (count%2===1) return uniqNum;
  }
  return 0;
}
