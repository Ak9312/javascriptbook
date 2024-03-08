let start = 0;
console.log(start);
function count() {
  start = start + 1;
  console.log(start);
  if (start < 10) {
    count();
  }
}

count();
