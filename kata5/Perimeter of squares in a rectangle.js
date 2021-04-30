// Perimeter of squares in a rectangle

// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// function perimeter(n) {
//     let fib = [0, 1];
//   for (let i = fib.length; i < n + 2; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return 4 * fib.reduce((acc, el) => acc + el, 0)
// }

function perimeter(n) {
  let fib = [0, 1];
  let sum = 1;
  for (let i = 2; i <= n + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i]
  }
  return sum * 4;
}
    
perimeter(20) // 114624

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216