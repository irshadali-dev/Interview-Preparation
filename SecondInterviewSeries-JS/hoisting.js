console.log("varName", varName); //undefined
var varName;
varName = "irshad";
console.log("varName", varName); // irshad

fn(); // hello from fn
function fn() {
  console.log("hello from fn");
}
fn(); // hello from fn
// fnContainer(); // undefined / not a function
var fnContainer = function () {
  console.log("i am an expression");
};
fnContainer(); // i am an expression
