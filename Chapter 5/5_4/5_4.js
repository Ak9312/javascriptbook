myTable = [];
let row = 2;
let collum = 10;
var counter = 0;

for (i = 0; i < row; i++) {
  tempTable = [];

  for (j = 0; j < collum; j++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);
