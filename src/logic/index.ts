const add = (a: number,b: number):number => a + b;

const divide = (a: number,b: number):number => {
  if (b === 0) {
    throw new Error("Division by zero")
  }

  return a / b;
}

export {
  add, 
  divide,
}
