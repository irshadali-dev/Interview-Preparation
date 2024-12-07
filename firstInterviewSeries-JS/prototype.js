Object.prototype.myAddress = "Jaipur";
Object.prototype.myWork = function () {
  return "App devlopment";
};

let users = {
  getFullName: function () {
    return this.name + " " + this.lastName;
  },
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  name: "irshad",
  lastName: "ali",
  birth: 2000,
  //   getAge: users.getAge,
};

let teacher = {
  name: "vikas",
  lastName: "sir",
  //   getAge: users.getAge,
  birth: 1978,
};

// student.__proto__ = users;
// teacher.__proto__ = users;

// console.log(student.getFullName());
// console.log(teacher.getFullName());
// console.log(student.getAge());
// console.log(teacher.getAge());

// console.log(student.myAddress);
// console.log(student.myWork());
