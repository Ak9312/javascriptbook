class employees {
  constructor(firstName, lastName, workYears) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.workYears = workYears;
  }
}

let e1 = new employees("John", "Cena", 10);
let e2 = new employees("Under", "Taker", 15);

names = [e1, e2];

employees.prototype.intro = function () {
  console.log(
    "His name is " +
      this.firstName +
      " " +
      this.lastName +
      " " +
      "he has worked for " +
      this.workYears +
      " years"
  );
};
e1.intro();
e2.intro();
names.forEach((element) => console.log(element));
