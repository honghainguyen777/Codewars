// All Balanced Parentheses

// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses
// function balancedParens(n) {
//   const arr = ["(", ")"];
//   function iter(parts) {
//     return function(v) {
//       let temp = parts.concat(v);
//       if (temp.length === n*2) {
//         if (isValid(temp)) result.push(temp);
//         return;
//       }
//       arr.forEach(iter(temp))
//     }
//   }
//   function isValid(combArr) {
//     const storage = [];
//     for (let i = 0; i< combArr.length; i++) {
//       if (combArr[i] === "(") storage.push("(");
//       if (combArr[i] === ")") {
//         if (!storage.pop()) return false;
//       }
//     }
//     return !storage.length
//   }
//   let result = [];
//   arr.forEach(iter([]));
//   return result.map(a => a.join(""));
// }

function balancedParens(n) {
  let result = [];
  function generator(left, right, str) {
    if (!left && !right) result.push(str);
    if (left > 0) generator(left-1, right+1, str + "(");
    if (right > 0) generator(left, right-1, str + ")")
  }
  generator(n, 0, "");
  return result;
}

// Examples
// balancedParens(0) // => [""]
// balancedParens(1); // => ["()"]
balancedParens(2); // => ["()()","(())"]
balancedParens(3) // => ["()()()","(())()","()(())","(()())","((()))"] // 5
// balancedParens(4) // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] // 14
balancedParens(5)
