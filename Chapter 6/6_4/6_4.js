let resulta = [];
function add(a, b) {
  return a + b;
}

for (let i = 0; i < 10; i++) {
  let result = add(5 * i, i * i);
  resulta.push(result);
}
console.log(resulta);
