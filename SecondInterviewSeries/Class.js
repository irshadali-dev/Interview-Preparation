class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  showDetails() {
    return this.name + " " + this.age;
  }
}

let person1 = new Person("Adm", 28);
console.log(person1.showDetails());

// // inheritance in Class
// class PersonChild extends Person {
//   constructor() {
//     super("steve", 29);
//   }
// }
// let person1 = new PersonChild();
// console.log(person1.showDetails());
