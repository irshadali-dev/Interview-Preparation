// *********************|| 1 ||*********************
/* 
function fruit() {
  console.log(name); //undefined ---> hoisting rules
  console.log(price); // cannot use let and const before initialization

  var name = "apple";
  let price = 20;
}
fruit();
*/

// *********************|| 2 ||*********************
/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // its give 3 value 3 time because of global scope
  }, 1);
}
 // ---------------------------------------------
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // its give 0,1,2 after 1ms
  }, 1);
}
*/
// *********************|| 3 ||*********************
/*
console.log(+true); // + use before boolean/string value --> convert into number
console.log(typeof +true);
console.log(+"false"); //Nan --> typeof -- number
*/
// *********************|| 4 ||*********************
/*
console.log(!"irshad"); // false --> opposite value of string is false
console.log(!""); // true
console.log(!!"irshad"); // true
console.log(typeof "irshad");
*/

// *********************|| 5 ||*********************

// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// *********************|| 6 ||*********************

// let c = { name: "irshad" };
// let d;
// d = c;
// c.name = "ali";
// console.log(d.name);

// *********************|| 7 ||*********************

// var x; // var is global variable
// var x = 10;
// console.log(x);

// *********************|| 8 ||*********************

// var x;
// let x = 10; // x has already been declared
// console.log(x);

// *********************|| 9 ||*********************

// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);
// console.log(typeof a); //number
// console.log(typeof b); //object

// *********************|| 10 ||*********************

// let name;
// naem = {};
// console.log(name);

// *********************|| 11 ||*********************

// function fruit() {
//   console.log("foo");
// }
// fruit.name = "apple"; // doesn't make any effect
// console.log(fruit());

// *********************|| 11 ||*********************

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

// *********************|| 12 ||*********************

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// *********************|| 13 ||*********************
// function getAge(...args) {
//   console.log(typeof args); // object
// }
// getAge(21);

// *********************|| 14 ||*********************
// function getAge() {
//   "use strict"; // it is must to use declaration of variable
//   var age = 21;
//   console.log(age);
// }
// getAge();

// *********************|| 15 ||*********************

// const sum = eval(10 - 5 * 10 + 5);
// console.log(sum);

// *********************|| 16 ||*********************
// * how long is coll_items accesible ----> one month after creating
// sessionStorage.setItem("cool_items", 123);
// console.log(sessionStorage.setItem("cool_items", 123));

// *********************|| 17 ||*********************

// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); //true

// *********************|| 18 ||*********************
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);

// *********************|| 19 ||*********************

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// *********************|| 20 ||*********************
// const foo = () => console.log("first");
// const bar = () => setTimeout(() => console.log("second"));
// const baz = () => console.log("third");

// foo();
// bar();
// baz();

// *********************|| 21 ||*********************
// const person = { name: "irshad" };

// function sayHello(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHello.call(person, 29));
// console.log(sayHello.bind(person, 29)());

// *********************|| 22 ||*********************

// function sayHi() {
//   return (() => 0)(); // its return zero , 0 is number ** its depend on datatype**
// }
// console.log(sayHi());
// console.log(typeof sayHi());

// *********************|| 23 ||*********************

// function sayHi() {
//   return () => 0; // its return function because its not called here
// }
// console.log(sayHi());
// console.log(typeof sayHi());

// *********************|| 24 ||*********************

// console.log(typeof typeof 1); // string --> typeof 1 is Number ,then typeof number is string

// *********************|| 25 ||*********************

// const numbers = [1, 2, 3];
// numbers[9] = 9;
// console.log(numbers);

// *********************|| 26 ||*********************

// const numbers = [1, 2, 3];

// numbers[3] = numbers; // its give infinite Array
// console.log(numbers);

// *********************|| 27 ||*********************
// Q. Everything in JavaScript is either a ....
// Ans. Primitive or object

// *********************|| 28 ||*********************

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

// *********************|| 29 ||*********************
// setInterval/setTimeOut --- always return id , which is start from 1....
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));

// *********************|| 30 ||*********************

// console.log([..."irshad"]); // it spread string in minimal possible part

// *********************|| 31 ||*********************

// const data = 3 + 4 + "5";
// console.log(data);
// console.log(typeof data); // string

// *********************|| 32 ||*********************

// console.log(typeof 3 + 4 + "5"); //number45

// *********************|| 33 ||*********************
// console.log([] == []); // false --> both array are different memory allocation

// *********************|| 34 ||*********************

// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return; // return undefined bcs here return empty
//   return num * 2;
// });
// console.log(data);

// *********************|| 35 ||*********************

// function getInfo(member) {
//   member.name = "irshad";
// }
// const person = { name: "sarah" };

// getInfo(person);
// console.log(person);

// *********************|| 36 ||*********************

// function Car() {
//   this.make = "tata";
//   return { make: "kia" };
// }

// const myCar = new Car();
// console.log(myCar.make);

// *********************|| 37 ||*********************
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);

// *********************|| 38 ||*********************
// (() => {
//   let x = (y = 10); // here is y assigned as only y(don't use let)
// })();
// console.log(typeof y); // typeof y is number

// *********************|| 39 ||*********************

// (() => {
//   let x = 5;
// })();
// no error both are private scope different
// (() => {
//   let x = 10;
// })();

// *********************|| 40  ||*********************

// (() => {
//   let x = (y = 10);
// })();

// (() => {
//   let x = (y = 20);
// })();

// console.log(y);

// *********************|| 41  ||*********************

// let x = 100;
// (() => {
//   var x = 10;
// })();
// console.log(x); // x=100

// *********************|| 42  ||*********************

// console.log(!true - true); // -1
// // *********************|| 43  ||*********************

// console.log(true + +"10"); // 11
