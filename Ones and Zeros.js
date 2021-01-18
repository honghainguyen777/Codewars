// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
  let int = 0;
  for (let i=0; i<arr.length; i++) {
    int += arr[i]*2**(arr.length-i-1);
  }
  return int;
};

binaryArrayToNumber([0, 0, 0, 1])

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

