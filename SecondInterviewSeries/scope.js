// $$$$$$$$$$$$$$$$$$$$>>  1  <<$$$$$$$$$$$$$$$$$$$$$$$$$
// console.log(" no 1", varName); // undefined
// var varName = 10;
// console.log(" no 3", varName); // 10

// function fn() {
//   console.log(" no 6", varName); // undefined
//   var varName = 20;
//   console.log(" no 8", varName); // 20
//   function b() {
//     console.log(" no 10", varName); // 20
//   }
//   b();
// }
// fn();

// $$$$$$$$$$$$$$$$$$$$>>  2  <<$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(" no 1", varName); // undefined
var varName = 10;
console.log(" no 2", varName); // 10
function b() {
  console.log(" no 5", varName); // 20
} // lexical scope depend on fxn declaration not fxn call & only fxn declaration decide access of variable
function fn() {
  console.log(" no 3", varName); // undefined
  var varName = 20;
  console.log(" no 4", varName); // 20

  b();
}
fn();
