// #######################||  1  ||########################
// function declaration
// function sayHello(params) {
//   console.log("hello", params);
//   //   return 10;
// }
// sayHello(); // function invocation
// sayHello(); // params--> undefined bcs arguments empty
// let fxn = sayHello();
// console.log("fxn", fxn); // if you don't return its give undefined

// #######################||  2  ||########################
// let fxn = function sayHi(params) {}; //function expression --> function treated as a variable

// let data = function () {
//   console.log("anonymous function");
// }; // anonymous function

// #######################||  3  ||########################
// (function fn() {
//   console.log("IIFE");
//   console.log("i will run my own");
// })(); // immediately invoked function expression --> its use for Avoid polluting the global namespace

// #######################||  4  ||########################
// let multiply = (num) => {
//   return num * num;
// }; // Arrow Function
// console.log(multiply(25));

// #######################||  5  ||########################
// # function are first class citizens
// 1. assignment -> fn expression

// 2. variable can be passed as a parameter
// function sayHello(params) {
//   console.log("hello", params);
//   params();
//   return 10;
// }
// sayHello([1, 2, 3, 4, 5]);

// 3. function can be passed as a parameter
// function sayHello(params) {
//   console.log("hello", params);
//   //   params();
//   return 10;
// }

// function smaller() {
//   console.log("smaller");
// }
// let rval = sayHello(smaller());
// console.log(rval);

// 4. function can be returned from a function
// function outer() {
//   console.log("outer fxn");
//   return function inner() {
//     console.log("inner function");
//   };
// }
// let val = outer();
// console.log(val());

function real() {
  console.log("first");
}
function real() {
  console.log("second");
}
real();
function real() {
  console.log("third");
}
