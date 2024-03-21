var test = document.querySelector(".sample");
test.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quasi?";
test.style.background = "red";
test.style.width = "100vh";
test.style.height = "100px";
test.style.color = "white";

function mouse(a, b) {
  test.style.background = a;
  test.event = b;
  console.log(b);
}

test.addEventListener("mousedown", function () {
  mouse("blue","mousedown");
});
test.addEventListener("mouseover", function () {
  mouse("green","mouseover" );
});
test.addEventListener("mouseup", function () {
  mouse("brown","mouseup");
});

test.addEventListener("mouseout", function () {
  mouse("pink","mouseout");
});
