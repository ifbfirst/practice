class Calculator {
  constructor(number1, number2) {
    if (!this.isValidNumber(number1) || !this.isValidNumber(number2)) {
      throw Error("The parameter is not a number");
    }
    this.X = number1;
    this.Y = number2;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  isValidNumber(number) {
    return isFinite(number) && !isNaN(number);
  }

  setX(number) {
    if (!isValidNumber(number)) {
      throw Error("The parameter is not a number");
    }
    this.X = number;
  }
  setY(number) {
    if (!isValidNumber(number)) {
      throw Error("The parameter is not a number");
    }
    this.Y = number;
  }
  logSum() {
    return this.X + this.Y;
  }

  logMul() {
    return this.X * this.Y;
  }

  logSub() {
    return this.X - this.Y;
  }

  logDiv() {
    if (this.Y === 0) throw Error("Division by 0 is not allowed");
    return this.X / this.Y;
  }
}

const calculator = new Calculator(1, -6);
const f = calculator.logSum;

console.log(f());
