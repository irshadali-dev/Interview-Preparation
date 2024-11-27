// in javaScript everything is object or primitive data type

let user = {
  name: "irshad",
  age: 24,
  getAddress: function () {
    console.log("jaipur");
  },
};
console.log(user);

for (const key in user) {
  console.log(key, ":", user[key]);
}
// ******************* Array *************
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.name = "irshad";
arr.getAddress = function () {
  console.log("jaipur");
};
arr[20] = 12;
console.log(arr);
for (const key in arr) {
  console.log(key, ":", arr[key]);
}
console.log(arr.length);

// ********** function  ***********

function fn() {
  console.log("hi from fn");
}
fn.prop = "irshad";
fn.myAge = function () {
  console.log(29);
};
// console.log(fn);
fn();
fn.myAge();
console.log(fn.prop);
