

class Calculator {
  constructor(a, b) {
    this.a = Number(a);
    this.b = Number(b);
    if (Number.isNaN(this.a) || Number.isNaN(this.b)) {
      throw new Error('Inputs a and b must be numeric.');
    }
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b === 0) throw new Error('Division by zero.');
    return this.a / this.b;
  }

  compute(op) {
    const operation = String(op).toLowerCase();
    switch (operation) {
      case 'add':
      case '+':
      case 'addition':
        return this.add();
      case 'subtract':
      case '-':
      case 'sub':
        return this.subtract();
      case 'multiply':
      case '*':
      case 'x':
      case 'mul':
        return this.multiply();
      case 'divide':
      case '/':
      case 'div':
        return this.divide();
      default:
        throw new Error(`Unsupported operation '${op}'. Use add, subtract, multiply, divide (or +, -, *, /).`);
    }
  }
}


if (require.main === module) {
  const [, , a, b, op] = process.argv;
  if (a === undefined || b === undefined || op === undefined) {
    console.log('Usage: node Problem-1.js <a> <b> <operation>');
    console.log('Example: node Problem-1.js 5 2 add');
    process.exit(1);
  }
  try {
    const calc = new Calculator(a, b);
    const result = calc.compute(op);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

module.exports = Calculator;
