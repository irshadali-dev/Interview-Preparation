// event bubbling -->false
// event capturing -->true

var div1 = document.querySelector("div");
var button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button");
});
div1.addEventListener("click", () => {
  console.log("div");
});
