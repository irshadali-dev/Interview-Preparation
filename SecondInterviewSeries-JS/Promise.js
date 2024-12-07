// 1.// ************|| Promise.all()  >>>>>>>>>>
// // The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// let p1 = new Promise(function (resolve, reject) {
//   resolve("promise 1 is resolved");
// });

// let p2 = new Promise(function (resolve, reject) {
//   reject("promise 2 is rejected");
// });

// let p3 = new Promise(function (resolve, reject) {
//   resolve("promise 3 is resolved");
// });

// let promiseAll = Promise.all([p1, p2, p3]);
// promiseAll
//   .then((promiseArr) => {
//     console.log(promiseArr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2.// ************|| Promise.race()  >>>>>>>>>>
// // The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
// // example no. 1
// let p1 = new Promise(function (resolve, reject) {
//   reject("promise 1 is rejected");
// // });

// let p2 = new Promise(function (resolve, reject) {
//   resolve("promise 2 is resolved");
// // });

// let p3 = new Promise(function (resolve, reject) {
//   resolve("promise 3 is resolved");
// });

// let promiseRace = Promise.race([p1, p2, p3]);
// promiseRace
//   .then((promiseArr) => {
//     console.log(promiseArr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // //example no. 2
// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 1 is resolved");
//   }, 2000);
// });

// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 2 is resolved");
//   }, 1000);
// });
// Promise.race([p1, p2])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // promise 2 is resolved

// //example no. 3
// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise 1 is resolved");
//   }, 2000);
// });

// let p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("promise 2 is rejected");
//   }, 1000);
// });
// Promise.race([p1, p2])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // promise 2 is rejected

// 3.// ************|| Promise.allSettled()  >>>>>>>>>>
// let p1 = new Promise(function (resolve, reject) {
//   resolve("promise 1 is resolved");
// });

// let p2 = new Promise(function (resolve, reject) {
//   resolve("promise 2 is resolved");
// });

// let p3 = new Promise(function (resolve, reject) {
//   reject("promise 3 is rejected");
// });

// let promiseAll = Promise.allSettled([p1, p2, p3]);
// promiseAll
//   .then((promiseArr) => {
//     console.log(promiseArr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 4.// ************|| Finally()  >>>>>>>>>>
// // The finally() method of the Promise object is used to return a callback when a Promise is settled (either fulfilled or rejected).
var loader = true;
function test() {
  var a = 1 + 1;
  return new Promise(function (resolve, reject) {
    if (a === 2) {
      resolve("promise is resolved --- ");
    } else {
      reject("promise is rejected *** ");
    }
  });
}

test()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Task is Accomplish ☑️");
    loader = false;
  });
