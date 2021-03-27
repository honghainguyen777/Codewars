// Twice linear

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
function dblLinear(n) {
  let u = [1];
  let x = 0;
  let y = 0;
  for (let i=0; i < n; i++) {
    let a = 2 * u[x] + 1;
    let b = 3 * u[y] + 1;
    if (a <= b) {
      u.push(a);
      x++
      if (a === b) y++;
    } else {
      u.push(b);
      y++;
    }
  }
  return u[n];
}

// Example:
// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, 28, 31...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .

// Example:
// dblLinear(10); //should return 22
dblLinear(5000); // 65857
// dblLinear(30); // 91

// Note:
// Focus attention on efficiency
