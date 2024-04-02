let counter = 0;

function t(x) {
  return new Promise((resolve) => {
    counter++;
    setTimeout(() => resolve("x value " + x + " counter " + counter), 1000);
  });
}

async function final(x) {
  console.log("ready " + x + " counter " + counter);
  var tes = await t(x);
  console.log(tes);
}

for (i = 0; i <= 10; i++) {
  final(i);
}
