final = [];
let row = 11;
let collum = 11;
let counter = 0;
for (i = 0; i < row; i++) {
  temp = [];
  for (j = 0; j < collum; j++) {
    counter = i * j;

    temp.push(counter);
  }
  final.push(temp);
}
console.table(final);

let myArray = [1, 5, 7];
for (el in myArray) {
  console.log(el);
}
