const mythrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("button").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("button").disabled = false;
  console.log("user Clicked");
}, 2000);
