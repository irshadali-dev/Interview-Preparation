// // // myArray[12] = 100;
// // // console.log(myArray);

// // // function myFun() {
// // //   //   "use strict";
// // //   var xyz = 100;
// // //   console.log(xyz);
// // // }

// // // console.log(myFun());
// // // // Array.prototype.extraProperty = "Irshad";

// // // // for (let v in myArray) {
// // // //   if (myArray.hasOwnProperty(v)) {
// // // //     console.log(v);
// // // //   }
// // // // }
// // // var abc = 100;

// // // var xyz = 1 + abc;
// // // console.log(xyz);
// // const data = {
// //   name: "irshad",
// // };
// // const arr = [1, 2, 3, 4, 5];

// // console.log(delete data);
// // console.log(delete arr);
// // console.log(fetch arr[1]);

// // Array.prototype.customForEachOne = function (callback) {
// //   for (let index = 0; index < this.length; index++) {
// //     // callback(this[index], index, this);
// //     console.log(myArray);
// //   }
// // };

// const myArray = [0, 1, 2, 3, 4, 5, 7, 8];

// // console.log(myArray.customForEachOne());

// Array.prototype.forEachTwo = function (callback, thiscontext) {
//   if (typeof callback !== "function") {
//     throw "callback in not a function";
//   }
//   const length = this.length;

//   let i = 0;
//   while (i < length) {
//     if (this.hasOwnProperty) {
//       callback.call(thiscontext, this[i], this);
//     }
//     i++;
//   }
// };
// myArray.forEachTwo();
