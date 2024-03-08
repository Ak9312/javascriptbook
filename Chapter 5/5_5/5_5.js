let grid = [];
let cells = 62;
let counter = 0;
var row;
for (i = 0; i < cells + 1 ; i++) {
  if (counter % 7 == 0) {
    if (row != undefined) {
      
      grid.push(row);
    }

    row = [];
 
}
    counter++;
    temp = counter;
    row.push(temp);

}
console.table(grid);
