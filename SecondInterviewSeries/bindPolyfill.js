let user1 = {
  name: "irshad",
  age: 25,
};
let getDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age}, years old,he lives in ${city} and drives ${car}`
  );
};
// let showDetailsBind = getDetails.bind(user1, "jaipur", "Rolce-Royal");
// showDetailsBind();

// // Custom Bind Method >>>>>>>>>>>>
Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let showDetailsMyBind = getDetails.myBind(user1, "jaipur");
showDetailsMyBind("BMW");
