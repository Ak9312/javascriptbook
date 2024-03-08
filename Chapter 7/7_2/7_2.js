class person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  fullName() {
    console.log("Hi i am " + this.first + this.last)
}
}

let person1 = new person("T", "800");
let person2 = new person("Dharam", "Deol");




person1.fullName();
person2.fullName();