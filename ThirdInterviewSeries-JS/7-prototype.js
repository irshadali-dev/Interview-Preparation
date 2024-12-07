const obj = {
  name: "irshad",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
// console.log(obj);

const obj2 = {
  roll: 5,
  age: 25,
  __proto__: obj,
};
// console.log(obj2);

// console.log(obj2.getRoll());

/// //// *********  polyfills ************
// const cities = ["Jaipur", "delhi"];

// Array.prototype.convertIntoObject = function () {
//   let newObj = {};
//   this.forEach((element, index) => {
//     newObj[index] = element;
//   });
//   return newObj;
// };

// console.log(cities.convertIntoObject());

function MyPototype(name) {
  this.name = name;
}

MyPototype.prototype = obj2;
const myproto = new MyPototype("Ali");

console.log(myproto.getName());
