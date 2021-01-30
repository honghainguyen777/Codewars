// Divide and Conquer

// function divCon(x){
//   let sumNum = 0;
//   let sumStr = 0;
//   x.forEach(el => {
//     if (typeof el === "number") sumNum += el;
//     else sumStr += Number(el);
//   })
//   return sumNum - sumStr;
// }

function divCon(x){
  return x.reduce((acc, el) => typeof el === 'number' ? acc+el : acc-el, 0);
}

divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.