// ===============>>>>>>>||  1  ||<<<<<<=================
let str = "Hello, how are you";
// convert string to one array
console.log(str.split());
console.log([str]);
// convert string to array with each character
console.log(str.split(""));
console.log([...str]);
// convert string to array with space
console.log(str.split(" "));
// convert string to array with specific character
console.log(str.split("e"));
// replace any character
console.log(str.replace("H", "q"));
console.log(str.replace(/H/g, "q")); // replace all H
// Get substring from string
console.log(str.substring(3, 8));
// remove first character
console.log(str.substring(1, str.length));
// remove last character
console.log(str.substring(0, str.length - 1));
// remove string before specific character
console.log(str.split("o")[0]);
console.log(str.split("o")[1]);
// reverse string
let temp = str.split("").reverse().join("");
console.log(temp);

// remove extra space
let data = "         Irshad        ";
console.log(data.trim());
