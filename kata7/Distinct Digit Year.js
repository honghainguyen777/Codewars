// Simple Fun#144 Distinct Digit Year
function distinctDigitYear(year) {
  for (let i=year+1; i < 9000; i++) {
    let yearArr = String(i).split("");
    let uniqArr = [...new Set(yearArr)];
    if (yearArr.length === uniqArr.length) return i;
  }
}

distinctDigitYear(1987)

// console.log(...new Set([1, 2, 2]))

// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input/Output
// [input] integer year

// 1000 ≤ year ≤ 9000

// [output] an integer

// the minimum year number that is strictly larger than the input number year and all its digits are distinct.