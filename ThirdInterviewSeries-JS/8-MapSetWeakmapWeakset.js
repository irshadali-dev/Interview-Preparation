// // Set, Map , WeakMap, WeakSet
// // Set --> remove duplicate element , it contains only unique values, it has object constructor
let myArray = [1, 2, 3, 4, 5, 5, 4];
let obj = new Set(myArray);
console.log(obj);

const nameObj = {
  name: "irshad",
};
obj.add(nameObj);
console.log(obj);

obj.delete(5);
console.log(obj);

console.log(obj.has(nameObj));
obj.forEach((element) => {
  console.log(element);
});

// // Map -> data store in key value pair

// let myMap = new Map([
//   ["a1", "jon"],
//   ["a2", "cena"],
// ]);

// console.log(myMap);
// myMap.set("a2", "ronny");
// console.log(myMap);
// console.log(myMap.get("a2"));
// myMap.forEach((element, index) => {
//   console.log(index + ":-->" + element);
// });

// // WeakSet ->
// //Only stores objects.
// // Objects are weakly held, allowing for garbage collection if there are no other references.
// //Cannot iterate over a WeakSet.
let ws = new WeakSet();
let ob1 = {
  name: "irshad",
};
let ob2 = {
  age: 25,
};
ws.add(ob1);
ws.add(ob2);
console.log(ws);

// // WeakMap -->
//// Keys are weakly held, meaning that if there are no other references to the key object, it can be garbage collected.
//// Does not prevent garbage collection of its keys.
///  Cannot iterate over a WeakMap.

let wm = new WeakMap();
var ob3 = { name: "ai" };
var ob4 = { age: 25 };
wm.set(ob3, "private ");
wm.set(ob4, "private data ");
console.log(wm);
console.log(wm.has(ob4));
