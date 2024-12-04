// // remove all null and undefined properties from an object
let obj = {
  a: 1,
  b: null,
  c: undefined,
  d: "hello",
};

const newObj = Object.entries(obj);
console.log(newObj);
