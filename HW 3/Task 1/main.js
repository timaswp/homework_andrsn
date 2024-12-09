const myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]() {
        if (typeof this.from !== 'number' || typeof this.to !== 'number') {
            throw new Error("Properties 'from' and 'to' must exist and be numbers");
        }

        if (!this.from || !this.to) {
            throw new Error("Properties 'from' and 'to' are not defined");
        }

        if (this.to < this.from) {
            throw new Error("'to' must be greater than or equal to 'from'");
        }

        let current = this.from;
        const end = this.to;

        return {
            next() {
                if (current <= end) {
                    return {value: current++, done: false}
                } else {
                    return {done: true}
                }
            }
        };
    }
};

for (let item of myIterable) {
    console.log(item);
}