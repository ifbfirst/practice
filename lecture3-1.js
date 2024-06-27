let myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {
  if (isNaN(this.from) || isNaN(this.to)) {
    throw Error('"from" or "to" is not a number');
  }
  if (this.from > this.to) {
    throw Error('Operation is not possible, because "from" > "to"');
  }
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let number of myIterable) {
  console.log(number);
}
