// Find the missing element between two arrays
// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// long version
// function findMissing(arr1, arr2) {
//   const arr1Obj = arr1.sort((a, b) => a-b).reduce((obj, num) => (obj[num] = (obj[num] || 0) + 1, obj), {});
//   const arr2Obj = arr2.sort((a, b) => a-b).reduce((obj, num) => (obj[num] = (obj[num] || 0) + 1, obj), {});
//   for (num in arr1Obj) {
//     if (arr1Obj[num] !== arr2Obj[num]) return Number(num);
//   }
// }

function findMissing(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return arr1[i];
  }
}


findMissing([1, 2, 2, 3], [1, 2, 3]) // => 2
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) // => 8
// The first array will always have at least one element.