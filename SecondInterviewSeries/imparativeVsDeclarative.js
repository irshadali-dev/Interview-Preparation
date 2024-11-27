// is the square of number is even or odd
// ********************|| imperative way ---->
// let x = 4;
// const xSquare = x * x;
// let isEven;
// if (xSquare % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// console.log(isEven);

// *********************|| declarative way--->

// const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false);
// console.log(isSquareEven(7));

// *********************|| Impure Function--->
// let a = 5;
// function addNum(b) {
//   console.log(a + b);
// }
// addNum(2);

// *********************|| Pure Function--->
// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(2, 9));

// *********************|| Immutable --->
// const person = {
//   name: "irshad",
//   age: 25,
// };

// person2.name = "steve";       // here person2 changes effect both person and person2 <--mutable
// prevent mutable problem using below concepts
// // person2 = Object.assign({}, person); // 1st way
// person2 = { ...person }; // 2nd way
// person2.name = "steve";
// console.log(person);
// console.log(person2);
