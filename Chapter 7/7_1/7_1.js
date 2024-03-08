class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const person1 = new Person("Abhi", "Kumar");
const person2 = new Person("Venu", "Gupta");

console.log(
  "Hello first person name is " +
    person1.firstname +
    " Hello second person name is " +
    person2.firstname
);
