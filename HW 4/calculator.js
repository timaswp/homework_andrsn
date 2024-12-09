class Calculator {
    constructor(x, y) {
        if (!this.#isValidNumber(x) || !this.#isValidNumber(y)) {
            throw new Error("Invalid value");
        }

        this.x = x;
        this.y = y;

        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    #isValidNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }

    setX(num) {
        if (!this.#isValidNumber(num)) {
            throw new Error("Invalid value");
        }
        this.x = num;
    }
    setY(num) {
        if (!this.#isValidNumber(num)) {
            throw new Error("Invalid value");
        }
        this.y = num;
    }

    logSum() {
        return this.x + this.y;
    }
    logMul() {
        return this.x * this.y;
    }
    logSub() {
        return Math.abs(this.x - this.y);
    }
    logDiv() {
        if (this.y === 0) {
            throw new Error("Cannot perform division by 0");
        }
        return (this.x / this.y);
    }
}

const calculator = new Calculator(6, 15);

const logSumRef = calculator.logSum;
console.log(logSumRef());