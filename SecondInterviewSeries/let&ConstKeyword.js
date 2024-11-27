// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%|| 1  ||%%%%%%%%%%%%%%%%%%%%%%%%%%%

// let letFruit = "orange";
// var varFruit = "orange";
// console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> orange ,varFruit is :-> orange
// {
//   let letFruit = "apple";
//   var varFruit = "apple";
//   console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> apple ,varFruit is :-> apple
// }
// console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> orange ,varFruit is :-> apple

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%|| 2  ||%%%%%%%%%%%%%%%%%%%%%%%%%%%
// console.log(letFruit); //Cannot access  before initialization
// console.log(varFruit); //Cannot access  before initialization

// let letFruit = "orange";

// const varFruit = "orange";
// console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> orange ,varFruit is :-> orange

// {
//   let letFruit = "apple";
//   const varFruit = "apple";
//   console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> apple ,varFruit is :-> apple
// }
// console.log("letFruit is :->", letFruit, ",varFruit is :->", varFruit); //letFruit is :-> orange ,varFruit is :-> orange

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%|| block ||%%%%%%%%%%%%%%%%%%%%%%%%%%%
let user = "irshad";
function username() {
  console.log(user);
  const lastname = "ali";
  function name() {
    console.log(user, lastname);
  }
  name();
}
username();

// %%%%%%%%%%%%%%%%%%%%%%%%%%%|| variable shadowing  ||%%%%%%%%%%%%%%%%%%%%%%%%%%%
//=====> legal variable shadowing
// var fruits = "orange";
// console.log(fruits);
// {
//   let fruits = "apple"; // here fruits shadowing over outer fruits
//   console.log(fruits);
//   {
//     const fruits = "banana"; // here fruits shadowing over outer fruits
//     console.log(fruits);
//   }
//   console.log(fruits);
// }
// console.log(fruits);

//=====> illegal variable shadowing
// let fruits = "orange";
// console.log(fruits);
// {
//   var fruits = "apple"; //Identifier 'fruits' has already been declared
//   console.log(fruits);
//   {
//     const fruits = "banana"; // here fruits shadowing over outer fruits
//     console.log(fruits);
//   }
//   console.log(fruits);
// }
// console.log(fruits);
