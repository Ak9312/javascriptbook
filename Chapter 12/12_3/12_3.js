

function ex() {
    let lastOne = "";
  for (let i = 0; i < arguments.length; i++) {
    lastOne = arguments[i];
}
  return lastOne;

}

console.log(ex("apple", "banana", "car", "mountain", "ocean"));
