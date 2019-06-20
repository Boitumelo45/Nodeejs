let person = {
  n1 : 1,
  n2 : 2,
  gender: "male",
  age : 0,
  legs : 2,
  arms : 2,
  name : "John",
  surname : "Doe",
}

const {num1, num2, ...data} = person;

const d = {
  ...data,
}
console.log(d);
