// Reverse polish notation calculator


function calculate(expression) {
  if (expression === "") return 0;
  const arr = expression.split(" ").map(el => Number.isNaN(Number(el)) ? el : Number(el));

  if (arr.length === 1 && typeof arr[0] === "number") return arr[0];
  
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') stack.push((arr[i]));
    else {
      let a = stack.pop();
      let b = stack.pop();
     
      switch(arr[i]) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(b- a);
          break;
        case "/":
          stack.push(b/a);
          break;
        case "*":
          stack.push(a * b);
          break;
      }
    }
  }
  return stack[0];
}

calculate("5 1 2 + 4 * + 3 -");