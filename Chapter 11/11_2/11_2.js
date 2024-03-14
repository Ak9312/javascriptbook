// document.getElementById("red").style.backgroundColor = "red";
// document.getElementById("blue").style.backgroundColor = "blue";
// document.getElementById("yellow").style.backgroundColor = "yellow";
// document.body.style.color = "green";

// function text("a") {
//     document.getElementById("a").style.backgroundColor = document.getElementById("a").textContent;
// }

// color = document.querySelectorAll("div")

// color.addEventListener("click",function(){text(red,blue,yellow)});

// });
function backg(a, b) {
  document.getElementById(a).style.backgroundColor = b;
}
let colors = document.querySelectorAll("div");

colors.forEach(function (color) {
  var output = color.textContent;
  color.addEventListener("click", function () {
    backg(color.id, output);
  });
});
