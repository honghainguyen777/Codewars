// Find the unique number
function findUniq(arr) {
  let uniqueNums = [...new Set(arr)];
  let count = 0;
  for (let i in arr) {
    uniqueNums[0]===arr[i] ? count++ : count;
    if (count > 1) break;
  }
  return count===1 ? uniqueNums[0] : uniqueNums[1];
}

findUniq([ 3, 10, 3, 3, 3 ])

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique