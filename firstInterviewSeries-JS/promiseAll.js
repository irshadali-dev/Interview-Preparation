let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ksjsksjks");

    reject("2 seconds");
  }, 2000);
});

data
  .then((res) => {
    // console.warn("then block", res);
  })
  .catch((err) => {
    // console.warn("catch block", err);
  });

// *******************************
// console.log(!!10 + 20);
// *******************************
let x = 0;
// console.log(x++);
// *******************************
// console.log(3 + 4 + "5");
// *******************************
let obj = {
  a: "one",
  b: "two",
  a: "three",
};
// console.log(obj);
// *******************************
let person = { name: "lydia" };
const members = [person];
person = null;
// console.log(members);
// *******************************
var num = 8;
var num = 10;
// console.log(num);
// *******************************
function getArray(...args) {
  // console.log(typeof args);
  // rest operator always give an array , array also known as object
}
getArray(21);
