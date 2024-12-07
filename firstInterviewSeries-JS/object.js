let key = "address";
let phone = 125874963;
const user = {
  name: "irshad",
  age: 27,
  ["last name"]: "Ali",
  [key]: "jaipur",
  phone,
};

console.log("city" in user);

for (item in user) {
  console.log(user[item]);
}

console.log(typeof typeof number);
