function testTruthyFalsy(val) {
  return val ? console.log("Truthy") : console.log("Falsy");
}

testTruthyFalsy(false); //Falsy
testTruthyFalsy(""); //Falsy---> empty string
testTruthyFalsy(null); //Falsy
testTruthyFalsy(NaN); //Falsy
testTruthyFalsy(undefined); //Falsy
testTruthyFalsy(0); //Falsy
testTruthyFalsy(4); //Truthy ---> number (exclude zero)
testTruthyFalsy(" "); //Truthy ---> string
testTruthyFalsy("a24"); //Truthy ---> string
testTruthyFalsy({}); //Truthy ---> empty-object
testTruthyFalsy({ name: "irshad" }); //Truthy ---> object
testTruthyFalsy([1, 2, 4, "ali"]); //Truthy ---> array
testTruthyFalsy([]); //Truthy ---> empty-array
testTruthyFalsy(new Boolean(false)); //Truthy --->
testTruthyFalsy(() => {}); //Truthy --->

(function () {
  if ((-100 && 100 && "0") || [] == true || 0) {
    console.log(1); //# 1
    if ([] || (0 && false)) {
      console.log(2); //# 2
    }
    if (Infinity && NaN && "false") {
      console.log(3);
      if ("") {
        console.log(4);
      }
    } else {
      console.log(5); // # 5
      if (({} || false === "") && !(null && undefined)) {
        console.log(6); //# 6
      }
    }
  }
})();
