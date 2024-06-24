// let arr = [];
// const obj = {
//     userName,
//     userAge,
// };

// function addPerson(name, age) {
//     obj.__proto__ = arr.push({
//     name,
//     age,
//   });
//   console.log(arr);
// }
// addPerson("Коля", 17);
// addPerson("Маша", 22);
// addPerson("Паша", 19);

const myIterable = { from: 1, to: 4 };
for (let key in myIterable) {
  console.log(myIterable[key]); // 1, 2, 3, 4
}
function iterObject() {}
