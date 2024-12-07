// /// question - 1st

for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })();
}

// /// question - 2nd

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    // console.log(count);
  }
  let message = `count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
