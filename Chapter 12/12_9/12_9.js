let data = [
  {item1: { name: "a", age: 44 }},
  {item2: { name: "b", age: 31 }},
];

let str = JSON.stringify(data);

console.log(str);

let obj = JSON.parse(str);
console.log(obj);

obj.forEach((x) => {console.log(x)});


