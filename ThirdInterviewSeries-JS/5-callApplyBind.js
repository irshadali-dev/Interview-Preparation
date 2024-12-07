let userDetails = {
  name: "irshad",
  age: 29,
  designation: "software developer",
  printDetails: function (state, city) {
    console.log(
      `my name is ${this.name} and my age is ${this.age} and designation is ${this.designation} and live in ${city} ${state}`,
      this
    );
  },
};
userDetails.printDetails("raj", "jaipur");

let userDetails2 = {
  name: "Ali",
  age: 30,
  designation: "software developer",
};

// function borrowing
// userDetails.printDetails.call(userDetails2);//call
// userDetails.printDetails.apply(userDetails2, ["raj", "jaipur"]); //apply
let newFun = userDetails.printDetails.bind(userDetails2, ["raj", "jaipur"]); //bind
newFun();
