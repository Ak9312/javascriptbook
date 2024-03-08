let first = () => console.log("One");
let second = () => console.log("Two");
let third = () => {
  console.log("Three");
  first();
  second();
};


let fourth = () => {
  console.log("Four");
  setTimeout(first, 2000);
  third();
};

fourth();
