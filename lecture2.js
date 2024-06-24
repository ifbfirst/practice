// reflashing the global object

// window.alert = (data) => confirm(data);
// window.confirm = (data) => prompt(data);
// window.prompt = (data) => alert(data);
// prompt("Some text");

// implementation of the built-in array function filter

// Array.prototype.myFilter = function (callback, obj) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback.call(obj, this[i], i, this)) newArray.push(this[i]);
//   }
//   console.log(newArray);
// };

// const isMoreFive = (element) => element > 5;
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9].myFilter(isMoreFive, [11, 5, 3, 16]);

alert([1, 2, 3].reduce((accum, valueCurrent) => accum + valueCurrent, 0));
