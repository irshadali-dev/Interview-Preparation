//  currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.

// function currying using bind function >>>>>>>>>>>>>>>>>>>>
// function add(a, b) {
//   console.log(a + b);
// }

// let addWith2 = add.bind(this, 5);
// addWith2(2);

// function currying using Closure >>>>>>>>>>>>>>>>>>>>
function add(x) {
  return function (y) {
    console.log(x + y);
  };
}

let addWith2 = add(2);
addWith2(5);
