function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addition(4)(7)(2)); // currying

userObj = {
  name: "irshad",
  age: 29,
};
function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}
const result = userInfo(userObj)("name");
console.log(result);

// // infinite currying in javascript

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    } else {
      return a;
    }
  };
}
const res = add(7)(8)(9)(8)();
console.log(res);
