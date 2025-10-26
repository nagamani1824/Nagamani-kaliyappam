"
class Calculator {
    constructor(a, b) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
    }

    calculate(operation) {
        switch(operation) {
            case "add":
            case "+":
                return this.a + this.b;
            case "subtract":
            case "-":
                return this.a - this.b;
            case "multiply":
            case "*":
                return this.a * this.b;
            case "divide":
            case "/":
                return this.b !== 0 ? this.a / this.b : "Cannot divide by zero";
            default:
                return "Invalid Operation";
        }
    }
}
