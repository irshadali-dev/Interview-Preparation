let counter = 0;
function getData() {
  console.log("fething data", counter++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const myBetterFunction = myDebounce(getData, 2000);
