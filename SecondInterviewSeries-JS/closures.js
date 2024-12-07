function add() {
  let a = 4;
  function addChild() {
    console.log(a + 5);
  }
  return addChild;
}
// At this point, 'addChild' has been returned but it still remembers the variable 'a' from the 'add' function's scope due to closure.

let catchAdd = add();
console.log(catchAdd);
catchAdd(); //In JavaScript, a closure is, a function that has access to the variables and parameters of its outer function, even after the outer function has finished executing
