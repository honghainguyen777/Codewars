// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// runtime is less than or equal to O(n);
// function findOutlier(integers){
//   let isOddArr = integers.slice(0, 3).map(el => Math.abs(el)%2 === 1).reduce((obj, el) => (obj[el] = (obj[el] || 0) + 1, obj), {});
//   isOddArr = isOddArr[true] >= 2 ? true : false;
//   for (let integer of integers) {
//     if (Math.abs(integer)%2 !== (isOddArr ? 1 : 0)) return integer;
//   }
// }

// shorter in terms of runtime for large arr, this is longer, because it need to iterate the array 2 times
function findOutlier(integers){
  let evens = integers.filter(el => el%2 === 0);
  let odds = integers.filter(el => el%2 !== 0);
  return evens.length === 1 ? evens[0] : odds[0];
}
// Examples
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
// Should return: 11 (the only odd number)

findOutlier([160, 3, 1719, 19, 11, 13, -21])
// Should return: 160 (the only even number)