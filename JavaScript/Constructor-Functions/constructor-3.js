function CalculatorApp(add, sub, mul, div) {
  this.add = (a, b) => (a + b);
  this.sub = (a, b) => (a - b);
  this.mul = (a, b) => (a * b);
  this.div = (a, b) => (a / b);

  return (add, sub, mul, div);
}
const calculate = new CalculatorApp();
console.log(calculate.add(2, 6));
console.log(calculate.sub(6, 4));

console.log(`The result of mutiplication of 6 by 5 is ${calculate.mul(6, 5)}`);
