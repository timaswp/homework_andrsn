class BaseStorage {
    constructor(maxSize = 10) {
        if (typeof maxSize !== 'number' || maxSize <= 0 || !isFinite(maxSize)) {
            throw new Error("Invalid max size value");
        }

        this.storage = [];
        this.maxSize = maxSize;
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    toArray() {
        return [...this.storage];
    }
}

class Stack extends BaseStorage {
    push(elem) {
        if (this.storage.length >= this.maxSize) {
            throw new Error("Max stack size reached");
        }
        this.storage.push(elem);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.storage.pop();
    }

    peek() {
        this.isEmpty() ? null : this.storage[this.storage.length - 1];
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== "function") {
            throw new Error("Provided entity is not iterable");
        }

        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }

        return stack;
    }
}

class Queue extends BaseStorage {
    push(elem) {
        if (this.storage.length >= this.maxSize) {
            throw new Error("Max queue size reached");
        }
        this.storage.push(elem);
    }

    shift() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.storage.shift();
    }

    peek() {
        this.isEmpty() ? null : this.storage[0];
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== "function") {
            throw new Error("Provided entity is not iterable");
        }

        const queue = new Queue(iterable.length);
        for (const item of iterable) {
            queue.push(item);
        }

        return queue;
    }
}