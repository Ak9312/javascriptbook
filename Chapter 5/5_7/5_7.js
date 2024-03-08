let car = {
  year: 1996,
  model: "Maruti",
  engine: 800,
};
// for (let prop in car) {
//   console.log("Key is " + prop);
//   console.log("Value are " + car[prop]);
// }

let mobile = [
  {
    year: 2012,
    model: "Samsung Galaxy Ace",
   
  },
  {
    year: 2015,
    model: "Xperia",
  },
  {
    year: 2016,
    model: "Mi",
  },
  {
    year: 2018,
    model: "Samsung A8+",
  },

  {
    year: 2022,
    model: "1 plus 9 rt",
  },
];

for (let mob in mobile) {
for (let x in mobile[mob]){
  console.log("key is " +  x);
  console.log("Value is "  + mobile[mob][x] );
}
 
}

