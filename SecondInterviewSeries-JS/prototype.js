// >>>>>>>>>>>>>>>>> Custom Map function using Prototype

Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};
function square(x) {
  return x * x;
}
let arr = [1, 2, 3, 4, 8, 9, 4, 6];
let mappedArr = arr.myMap(square);
console.log(mappedArr);

// >>>>>>>>>>>>>>>>> Custom filter function using Prototype
Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}

let Array1 = [1, 2, 3, 45, 69, 75, 48, 45, 79, 4, 5];
let filteredArray = Array1.myFilter(isEven);
console.log(filteredArray);
