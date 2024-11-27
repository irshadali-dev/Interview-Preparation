let data = [1, 2, 7, 4, 7, 4, 75, 7];

data.length = 4; // to fixed length

console.log(data);

let sum = data.reduce((x, y) => x + y); // to sum
console.log(sum);

let unique = new Set(data); //remove repeat value
console.log([...unique]);

let w = 25;
w = (w++, w++, w); //coma operator (work,print)
console.log(w);

let x = 58;
let y = 84;
[x, y] = [y, x]; // value swap using deconstructing
console.log(x, y);
