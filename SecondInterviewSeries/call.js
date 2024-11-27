let getDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age}, years old,he lives in ${city} and drives ${car}`
  );
};

let user1 = {
  name: "irshad",
  age: 25,
};

let user2 = {
  name: "Alam",
  age: 29,
};
let user3 = {
  name: "Ali",
  age: 27,
};

// getDetails.call(user2, "jaipur", "bmw");
// getDetails.call(user1);
// getDetails.call(user3);

// getDetails.apply(user2, ["jaipur", "bmw"]);
let bindData = getDetails.bind(user2, "jaipur", "bmw");
//The bind() method returns a new function with a specified this value and any arguments that are passed to it. The bind() method does not call the function immediately but instead returns a new function that can be called later.
bindData();
