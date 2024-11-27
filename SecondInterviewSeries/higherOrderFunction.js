// map,filter,reduce

let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.map(function (x) {
  return x * x;
});
console.log(arr);
console.log(newArr);

// filter

let filteredArr = arr.filter(function (x) {
  return x % 2 === 0; // is even
});
console.log(filteredArr);

// reduce --> its give single output
let sumArr = arr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);
console.log(sumArr);
