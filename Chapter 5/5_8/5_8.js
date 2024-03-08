let op = "a ";
let skp = 5;

for (let i = 0; i < 11; i++) {
  if (i == skp) {
    continue;
   
  }
  op = op + 1;
}
console.log(op)
for (let j = 0; j < 10; j++) {
    if (j == skp) {
      
      break;
    }
    op = op + 2;
  }
  console.log(op)
  