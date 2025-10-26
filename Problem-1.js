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

const calc1 = new Calculator(10, 5);
console.log(calc1.compute('add'));     
console.log(calc1.compute('subtract'));
console.log(calc1.compute('multiply')); 
console.log(calc1.compute('divide'));  
