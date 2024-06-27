let users = [];

const user = {
  userName: null,
  userAge: null,
};

function addPerson(name, age) {
  const random = Math.random();
  let newUser;
  switch (true) {
    //1.literal
    case random <= 0.25:
      newUser = {
        name,
        age,
      };
      break;
    case 0.25 < random && 0.5 >= random:
      //2.Object.create
      newUser = Object.create(user);
      newUser.userName = name;
      newUser.userAge = age;
      break;
    case 0.5 < random && 0.75 >= random:
      // 3. new Object
      newUser = new Object();
      newUser.userName = name;
      newUser.userAge = age;
      break;
    case 0.75 < random:
      // 4. Object.assign
      newUser = Object.assign({}, { userName: name, userAge: age });
      break;
    default:
      newUser = Object.assign({}, { userName: name, userAge: age });
  }

  users.push(newUser);

  return users;
}
addPerson("Коля", 17);
addPerson("Маша", 22);
addPerson("Паша", 19);
addPerson("Саша", 24);
addPerson("Лена", 18);
