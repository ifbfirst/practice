let arr = [];
const obj = {
  userName,
  userAge,
};

function addPerson(name, age) {
  obj.__proto__ = arr.push({
    name,
    age,
  });
  console.log(arr);
}
addPerson("Коля", 17);
addPerson("Маша", 22);
addPerson("Паша", 19);
