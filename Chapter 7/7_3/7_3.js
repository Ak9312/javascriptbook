class animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  intro() {
    console.log(this.name + " " + this.sound);
  }
}

animal.prototype.test = function () {
  console.log("Hi " + this.name + " is good");
};

animal.prototype.favcol = "Green";

let animal1 = new animal("Dog", "Bark");
console.log(animal1.favcol);
let animal2 = new animal("Cat", "Meow");
animal1.intro();
animal2.intro();
animal1.test();
console.log(animal1);
