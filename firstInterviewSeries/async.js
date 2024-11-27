// console.log(test2());
// const test2 = function test() {
//   function foo() {
//     return 100;
//   }
//   return foo();
//   function foo() {
//     return 10;
//   }
// };
// console.log(true + true);

// const task = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("done");
//   }, 1000);
// });
// task
//   .finally(() => {
//     console.log("finally");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//   console.log("error is :", error);
// });

// function Hello() {
//   var a = 10;
//   function innerFunction() {
//     return a;
//   }
//   return innerFunction;
// }
// var inner = Hello();
// console.dir(inner);

function createBase(a) {
  return (b) => {
    return a + b;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
