// ========| 1 |======>>>>
// let a = [];
// let b = [];
// console.log(a == b);  // false ----- memory allocation is different for both array
// console.log(a === b);// false

/* ========| 2 |======>>>> */
// let a = [];
// let b = a; // memory location transfer
// console.log(a == b); // true ---- memory allocation is same for both array
// console.log(a === b); // true

// ========| 3 |======>>>>
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]); //true -- here compare value
// console.log(a[0] === b[0]); //true --here compare value

// ========| 4 |======>>>>
// let z = [1, 2, 3, 4];
// let a = { name: "irshad" };
// console.log(...z); // 1 2 3 4 <--- array convert into string /spread-operator/rest-operator

// ========| 5 |======>>>>
// console.log(typeof NaN); //number

// ========| 6 |======>>>>
// let data = 10 - -10;
// console.log(data); // 20 -- simple arithmetic operation in minus

// ========| 7 |======>>>>
// const set = new Set([1, 1, 2, 3, 4, 5, 4, 7, 8, 9, 6, 7, 4]); // remove repeatable value / Set dataType -- doesn't carry duplicate value
// console.log(set);

// ========| 8 |======>>>>
// let data = { name: "irshad" };
// console.log(delete data.name); // true --> delete property & check either delete or not
// console.log(data); // {}

// ========| 9 |======>>>>
// let data = { name: "irshad" };
// console.log(delete data); // false --> We can't delete object using delete operator , delete only property of object
// console.log(data);

// ========| 10 |======>>>>
// const data = ["jimmy", "sarah", "jack"];
// const [y] = data; //[]--> it is indicate array index ,start from 0th index
// console.log(y);

// ========| 11 |======>>>>
// const data = ["jimmy", "sarah", "jack"];
// const [, y] = data; //how to get second element
// console.log(y);

// ========| 12 |======>>>>
//how to get property without using . operator in object
// const data = { name: "irshad", age: 29, skill: "JS" };
// const { name, age } = data;
// console.log(name, age);

// ========| 13 |======>>>>
// let data = { name: "irshad", age: 29, skill: "JS" };
// let info = { city: "jaipur", mail: "test@gmail.com" };
// data = { ...data, ...info }; // merge two object
// console.log(data);

// **** also we merge in array
// let data = ["irshad", 29, "JS"];
// let info = ["jaipur", "test@gmail.com"];
// data = [...data, ...info]; // // merge two array
// console.log(data);

// ========| 14 |======>>>>
// let data = { name: "irshad", age: 29, skill: "JS" };
// let info = { city: "jaipur", mail: "test@gmail.com" };
// data = { data, ...info }; // {data:{..},city,mail}
// console.log(data);

// **** also we merge in array
// let data = ["irshad", 29, "JS"];
// let info = ["jaipur", "test@gmail.com"];
// data = [data, ...info]; // [[],"jaipur","test@gmail.com"]
// console.log(data);

// ========| 15 |======>>>>
// let data = { name: "irshad", age: 29, skill: "JS" };
// let info = { city: "jaipur", mail: "test@gmail.com", skill: "React" };
// data = { ...data, ...info };
// console.log(data);

// ========| 16 |======>>>>
// const name = "irshad";
// console.log(name()); // name is not a function

// ========| 17 |======>>>>
// const result = false || {} || null; // or-operator always take first positive value,here is {}
// console.log(result);

// ========| 18 |======>>>>
// const result = null || false || ""; // or-operator always take first positive value,if positive value doesn't exists then he pickup last value,here he pickup --> ""
// console.log(result);

// ========| 19 |======>>>>
// const result = [] || 0 || true; //here he pickup -->  []
// console.log(result);

// ========| 20 |======>>>>
// console.log(Promise.resolve(5)); //{<fulfilled>: 5}--> bcs resolve also give promise

// ========| 21 |======>>>>
// console.log("😀" === "😀"); //true --> its compare

// ========| 22 |======>>>>
// Q.-> JSON.parse(), what this method will do
// Ans. Parses JSON value to a JavaScript value

// ========| 23 |======>>>>
// let name = "irshad";
// function getName() {
//   console.log(name);
//   let name = "ali"; // Cannot access 'name' before initialization
// }
// getName();

// ========| 24 |======>>>>
// let name = "irshad";
// function getName() {
//   console.log(name); // irshad
// }
// getName();

// ========| 25 |======>>>>
// console.log(`${((x) => x)("I love")} to program`);

// ========| 26 |======>>>>
// how to get sum using array destructing
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// console.log(sumValues(...[1, 2, 3])); // it will give 6 👈
// console.log(sumValues([...[1, 2, 3]])); // 1,2,3undefinedundefined
// console.log(sumValues([...1, 2, 3])); // 1 is not iterable
// console.log(sumValues([1, 2, 3])); // 1,2,3undefinedundefined

// ========| 27 |======>>>>
// const name = "code step by step";
// console.log(!typeof name === "object"); // in js execution take left to right,here are 2 operation (!,===),so its give false
// console.log(!typeof name === "string");// in js execution take left to right,here are 2 operation (!,===),so its give false
// console.log(!typeof name === false);// in js execution take left to right,here are 2 operation (!,===),so its give true

// ========| 28 |======>>>>
// const name = "sudhir";
// const age = 28;
// console.log(isNaN(name));
// console.log(isNaN(age));

// ========| 29 |======>>>>
// let person = { name: "irshad" };
// Object.seal(person); // when use seal method in object you can't add property,only you can modify exist property
// person.age = 2585;
// person.name = "ali";
// console.log(person); //{name: 'ali'}

// ========| 30 |======>>>>
// let data = [1, 0, 9, 8, 7];
// data.shift(); //remove first element
// console.log(data);
// data.pop(); //remove last element
// console.log(data);

// ========| 31 |======>>>>
// check any value is odd or even
// let a = 0;
// if (a % 2) {
//   console.log(a, ": is even number");
// } else {
//   console.log(a, ": is odd number");
// }

// ========| 31 |======>>>>
// let data = "true";
// // convert data to false boolean value
// console.log(typeof !data, !data); // !String = Boolean

// ========| 32 |======>>>>
// let data = "true";
// // convert data to false boolean value
// console.log(typeof !!data, !!data); // !String = Boolean

// ========| 33 |======>>>>
// Q.->  difference b/w map and forEach function
// Ans.  The main difference between the map() and forEach() methods in JavaScript is that map() returns a new array, while forEach() does not.

// ========| 34 |======>>>>
// let data = ["jack", "john", "jackson"];
// delete data[1]; //it's give empty
// console.log(data.length); // length remain same

// ========| 35 |======>>>>
// merge two array
// let data = [1, 2, 3, 1, 4, 5];
// let info = ["email", "jaipur"];
// let c = [...data, ...info];
// console.log(c);

// ========| 36 |======>>>>
// let data = [1, 2, 3, 1, 4, 5];
// let info = [2, 8, 5, 1];
// let c = [...data, ...info];
// console.log(c);

// ========| 37 |======>>>>
// let c = 3 ** 3; //cube
// console.log(c);

// ========| 38 |======>>>>
// let a = 2;
// setTimeout(() => {
//   console.log(a); // a=100
// }, 0);
// a = 100;

// ========| 39 |======>>>>
// let a = 52;
// let A = 41;
// console.log(A); // javaScript is CaseSensitive

// ========| 40 |======>>>>
// let a = "ask";
// let b = "ask";
// console.log(a === b);

// ========| 41 |======>>>>
// let a = 1;
// let b = 2;
// console.log(--b === a); // true --> --b is decrement

// ========| 41 |======>>>>
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((a === b) === --c); //false

// ========| 42 |======>>>>
// console.log(3 * 3); //square
// console.log(3 ** 3);// cube
// console.log(3**(*3));//Unexpected token '*'

// ========| 43 |======>>>>
// console.log(a); //undefined
// var a = 10;

// ========| 44 |======>>>>
// console.log(a); //not defined

// ========| 45 |======>>>>
// console.log([[[[[[[[]]]]]]]]);
// console.log({{{{{{{}}}}}}});// error

// ========| 46 |======>>>>
// how to find OS Name
// navigator.platform;

// ========| 47 |======>>>>
// let for =100 // error==> for is reserved keyword
