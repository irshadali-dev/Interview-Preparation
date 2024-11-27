var a = 10;
console.log("1st result", a); // 10
function fn() {
  console.log("2nd result", a); // undefined
  var a = 20;
  a++;
  console.log("3rd result", a); // 21
  if (a) {
    var a = 30;
    a++;
    console.log("4th result", a); //31
  }
  console.log("5th result", a); //31
}
fn();
console.log("6th result", a); //10

// var scope --> function scope
