let Count = 10;
console.log(Count);
function Outside() {
  function Inside() {
    if (Count > 0) {
      Count = Count - 1;
      console.log(Count);
      Outside();
    } else if (Count == 0) {
      console.log("Countdown over");
    }
  }
  Inside();
}

Outside();
