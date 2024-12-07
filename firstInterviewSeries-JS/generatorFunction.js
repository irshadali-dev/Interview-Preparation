function* simpleGenerator() {
  console.log("Function Called");
  yield 10;
  console.log("first yeild called");

  function count() {
    for (let index = 0; index < 6; index++) {
      console.warn(index);
    }
  }
  yield 20;

  console.log("second yeild called");
  yield 30;
  console.log(count());
}

let sg = simpleGenerator();
console.warn(sg.next());
console.warn(sg.next());
console.warn(sg.next());
console.warn(sg.next());
