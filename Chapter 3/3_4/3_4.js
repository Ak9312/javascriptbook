myCar = {
  make: "Maruti",
  model: 800,
  year: 1996,
  functional: true,
  color: "green",
  forSale: true,
};

let variable = "color";
myCar[variable] = "red";

variable = "forSale";
myCar[variable] = false;

console.log("Make is " + myCar.make + " model is " + myCar.model);
console.log(myCar.forSale);
