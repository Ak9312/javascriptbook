function greet(fullName) {
  console.log("Hello " + fullName);
}

function nu(str, callback) {
  fullName = str.split(" ");
  callback(fullName);
}

nu("Ram Shyam", greet);
