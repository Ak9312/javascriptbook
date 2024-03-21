// var inp = document.getElementById("input");
var divs = document.querySelectorAll(".output");
var bt = document.querySelectorAll(".btn1, .btn2");
var inp = document.querySelector("input");
log = [];

function display(event) {
  const targetButton = event.target;
  const val = {
    value: inp.value,
    eve: event.type,
    class: targetButton.getAttribute("class"),
    tag: targetButton.tagName,
  };
  var x = inp.value;

  divs.forEach(function (div) {
    div.textContent = x;
  });

  inp.value = " ";

  log.push(val);
}

bt.forEach(function (button) {
  button.addEventListener("click", display);
});

document.getElementById("logs").addEventListener("click", function () {
  console.log(log);
});

