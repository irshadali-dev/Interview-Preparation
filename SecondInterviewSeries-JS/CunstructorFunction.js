// // Sometimes we need to create many objects of the same type.
// // To create an object type we use an object constructor function.
// // It is considered good practice to name constructor functions with an upper-case first letter.

function Car(brand, model, color) {
  (this.Brand = brand),
    (this.Model = model),
    (this.Color = color),
    (this.Drive = function () {
      console.log(`${this.Model} I am Driving`);
    });
}

let Car1 = new Car("bmw", "x5", "grey");
console.log(Car1);
Car1.Drive();
let Car2 = new Car("jaguar", "x5", "grey");
console.log((Car2.Model = "ferrari"));
Car2.Drive();
console.log(Car2);
let Car3 = new Car("totyota", "x5", "grey");
console.log(Car3.Brand, Car3.Model);
