let a = 1000;

(function () {
  let a = 500;
  console.log(a);
})();

let result = (function () {
  a = 700;
  return a;
});

console.log(result);

(function (a) {
console.log('${a}');



}) ("Yello");