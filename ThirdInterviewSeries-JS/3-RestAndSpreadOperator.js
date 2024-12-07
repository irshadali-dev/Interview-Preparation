// (...)Rest operator ---->> The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript

// Rest in Array
function addNumbers(a, b, c, ...other) {
  console.log(other);

  return a + b + c;
}
let res = addNumbers(1, 2, 4, 5, 78, 9, 7, 8, 9, 75);
console.log(res);

// // Spread operator in Array ---> Spread syntax "expands" an array into its elements

var arr = ["js", "cs", "java", "python"];

console.log(arr);
console.log(...arr);

// Rest in Object
let students = {
  name: "adam",
  age: 25,
  hobbies: ["cricket", "books"],
};

const { age, ...value } = students; // object destructing
console.log(age);
console.log(value);

// Spread in Object
let newStudent = {
  ...students,
  age: 18,
};
console.log(newStudent);
