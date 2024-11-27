// //👉👉👉👉👉 this in NODE.JS with non-strict mode👈👈👈👈👈

// //☑️ 1st condition
// console.log(this); // its return empty object

// //☑️ 2nd condition
// function showThis() {
//   console.log(this);// its return global object
// }
// showThis();

// //☑️ 3rd condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     console.log(this); // its return object itself
//   },
// };
// obj.f();

// //☑️ 4th condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     function g() {
//       console.log(this); // its return global object
//     }
//     g();
//   },
// };
// obj.f();

// //👉👉👉👉👉 this in NODE.JS with strict mode👈👈👈👈👈
// "use strict";
// //☑️ 1st condition
// console.log(this); // its return empty object

// //☑️ 2nd condition
// function showThis() {
//   console.log(this); // its return undefined
// }
// showThis();

// //☑️ 3rd condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     console.log(this); // its return object itself
//   },
// };
// obj.f();

// //☑️ 4th condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     function g() {
//       console.log(this); // its return undefined
//     }
//     g();
//   },
// };
// obj.f();

// //👉👉👉👉👉 this in BROWSER with non-strict mode👈👈👈👈👈
// //☑️ 1st condition
// console.log(this); // its return window object

// //☑️ 2nd condition
// function showThis() {
//   console.log(this); // its return Window object
// }
// showThis();

// //☑️ 3rd condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     console.log(this); // its return object itself
//   },
// };
// obj.f();

// //☑️ 4th condition
// let obj1 = {
//   name: "irshad",
//   f: function () {
//     function g() {
//       console.log(this); // its return Window object
//     }
//     g();
//   },
// };
// obj1.f();

// //👉👉👉👉👉 this in BROWSER with strict mode👈👈👈👈👈
// "use strict";
// //☑️ 1st condition
// console.log(this); // its return window object

// //☑️ 2nd condition
// function showThis() {
//   console.log(this); // its return undefined
// }
// showThis();

// //☑️ 3rd condition
// let obj = {
//   name: "irshad",
//   f: function () {
//     console.log(this); // its return object itself
//   },
// };
// obj.f();

// //☑️ 4th condition
// let obj1 = {
//   name: "irshad",
//   f: function () {
//     function g() {
//       console.log(this); // its return undefined
//     }
//     g();
//   },
// };
// obj1.f();
