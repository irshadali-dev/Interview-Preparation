// // *******************// synchronous callback \\*********************

// function greet(personName, age, callback, callback2) {
//   let msg = "hello " + personName;
//   let ageOfPerson = age;
//   callback(msg);
//   callback2(ageOfPerson);
// }

// function logGreeting(greeting) {
//   console.log(greeting);
// }

// function showAge(age) {
//   console.log("my age is " + age);
// }
// greet("steve", 89, logGreeting, showAge);

// // *******************// synchronous callback \\*********************

console.log("Hello");

setTimeout(function st1() {
  console.log("I am St1");
}, 2000);

setTimeout(function st2() {
  console.log("I am St2");
}, 1000);

function sayBye() {
  console.log("Bye");
}

sayBye();
