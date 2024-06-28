class Stack {
  constructor(stackSize = 10) {
    if (isNaN(stackSize)) {
      throw Error(`${stackSize} is not a number`);
    } else {
      this.stackSize = stackSize;
      this.elements = [];
    }
  }
  push(element) {
    if (this.elements.length === this.stackSize) {
      throw Error("Stack is full");
    } else {
      return this.elements.push(element);
    }
  }
  pop() {
    if (this.elements.length === 0) {
      throw Error("Stack is empty");
    } else {
      return this.elements.pop();
    }
  }

  peek() {
    if (this.elements.length === 0) {
      throw Error("Stack is empty");
    } else {
      return this.elements[this.elements.length - 1];
    }
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  toArray() {
    return Array.from(this.elements);
  }

  static fromIterable(iterable) {
    const data = Array.from(iterable);
    const newStack = new Stack(data.length);
    try {
      for (let i = 0; i < data.length; i++) {
        newStack.push(data[i]);
      }
      return newStack;
    } catch (err) {
      throw Error("Object is not iterable");
    }
  }
}
