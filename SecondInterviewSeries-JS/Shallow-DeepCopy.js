// // // problem of copy
let arr = [1, 2, 3, 4];
let copyArray = arr;
copyArray[1] = 5; // its change in reference array

console.log(arr); // [1, 5, 3, 4]
console.log(copyArray); // [1, 5, 3, 4]

// // spread operator =======>>>>>>>>>>>> SHALLOW COPIES
// // A shallow copy is when you create a copy of an object or array, but only the first level of properties or elements is copied. If the object or array contains nested objects, the references to those nested objects are copied, not the actual values.
// let sports = ["cricket", "football", "hockey"];

// let copySports = [...sports];

// copySports[1] = "baseball";

// console.log("original sports array --->", sports); //  ['cricket', 'football', 'hockey']
// console.log("copy sports array --->", copySports); // ['cricket', 'baseball', 'hockey']

// // Array.from() =======>>>>>>>>>>>> shallow copies

// let sports = [
//   "cricket",
//   "football",
//   "hockey",
//   { a: "basketball", b: "swimming" },
// ];

// let copysports = Array.from(sports);

// copysports[1] = "baseball";
// copysports[3]["a"] = "boxing";

// console.log("original sports array --->", sports);
// console.log("copy sports array --->", copysports);

// // Array.from() =======>>>>>>>>>>>> shallow copies

// let sports = [
//   "cricket",
//   "football",
//   "hockey",
//   { a: "basketball", b: "swimming" },
// ];

// let copysports = sports.slice(0);

// copysports[1] = "baseball";
// copysports[3]["a"] = "boxing";

// console.log("original sports array --->", sports);
// console.log("copy sports array --->", copysports);

// // JSON.parse(JSON.stringify()) =======>>>>>>>>>>>> DEEP copies
// // A deep copy is when you create a complete copy of an object or array, including all nested objects or arrays. Unlike a shallow copy, the copied object has no shared references with the original object. Changes made to the original object or the copy will not affect each other.
let sports = [
  "cricket",
  "football",
  "hockey",
  { a: "basketball", b: "swimming" },
];

let copysports = JSON.parse(JSON.stringify(sports));

copysports[1] = "baseball";
copysports[3]["a"] = "boxing";

console.log("original sports array --->", sports);
console.log("copy sports array --->", copysports);

/* # **Deep Copy vs. Shallow Copy: Arrays and Objects**

| **Type**   | **Shallow Copy**                    | **Deep Copy**   |
--------------------------------------------------------------------------------
| **Array**  | `array.slice()`, `[...array]`      | `JSON.parse(JSON.stringify(array))`,`structuredClone(array)`
|            | `Array.from(array)`               | Custom function, Lodash, etc.
----------------------------------------------------------------------------------
| **Object** | `Object.assign({}, object)`       | `JSON.parse(JSON.stringify(object))`, `structuredClone(object)` |
|            | `{...object}`                     | Custom function, Lodash

*/
