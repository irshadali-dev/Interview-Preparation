let obj = {
  name: "irshad",
  age: 29,
  address: {
    city: "jaipur",
    state: "Raj",
  },
};

// let user = Object.assign({}, obj);// shallow copy
// let user = { ...obj }; // shallow copy
// user.name = "peter";
// user.age = 26;
// console.log("shallow copy :", obj);
// console.log(user);
let user = JSON.parse(JSON.stringify(obj));
user.age = 26;
user.address.city = "Ajmer";
console.log("Deep copy :", obj);
console.log(user);
