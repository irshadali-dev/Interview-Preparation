const datas = [
  { name: "irshad", profession: "devloper" },
  { name: "Alam", profession: "devloper" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}  profession is ${data.profession}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// callback function
// function createData(newData, callback) {
//   setTimeout(() => {
//     datas.push(newData);
//     callback();
//   }, 4000);
// }
// createData({ name: "rockey", profession: "devloper" }, getDatas);

// promise

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("something has wrong");
      }
    }, 2000);
  });
}
// createData({ name: "rockey", profession: "devloper" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

async function start() {
  await createData({ name: "rockey", profession: "devloper" });
  getDatas();
}
start();
