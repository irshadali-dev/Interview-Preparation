// ###########################>>>>>>>>>>>>>>  custom map

let myArr = [1, 2, 3, 45, 6, 79];

function myPolyfillMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function cube(x) {
  return x ** x;
} // callback function

console.log(myArr);
console.log(myPolyfillMap(myArr, cube));

// ###########################>>>>>>>>>>>>>>  custom filter

function myPolyfillFilter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
function evenFn(x) {
  if (x % 2 === 0) {
    return x;
  }
}
console.log(myPolyfillFilter(myArr, evenFn));

// ###########################>>>>>>>>>>>>>>  custom reduce
