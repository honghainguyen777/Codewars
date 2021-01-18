// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
  let newArr = arr.filter(el => el !== 0);
  return [...newArr,...Array(arr.length - newArr.length).fill(0) ]
}

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]