// -- UseCases
// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [
  {
    id: 1,
    name: "irshad",
    isActive: true,
    age: 29,
  },
  {
    id: 2,
    name: "ashraf",
    isActive: true,
    age: 28,
  },
  {
    id: 3,
    name: "akash",
    isActive: true,
    age: 25,
  },
  {
    id: 4,
    name: "javed",
    isActive: false,
    age: 30,
  },
];

let names = [];
// //  solutions-1 --> level-1
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }
// console.log(names);

// //  solutions-2 --> level-2
users.forEach((user) => {
  names.push(user.name);
});
console.log(names);
