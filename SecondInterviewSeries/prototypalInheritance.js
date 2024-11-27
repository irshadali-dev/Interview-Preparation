let person1 = {
  name: "aadm",
  age: 28,
  showDetails: function () {
    console.log(`My Name Is ${this.name} and Age Is ${this.age}`);
  },
};

let person2 = {
  name: "steve",
};
person2.__proto__ = person1; // Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects

console.log(`${person2.name} and ${person2.age}`);
person2.showDetails();
