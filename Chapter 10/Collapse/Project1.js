var button = document.querySelectorAll("div.title");
var display = document.querySelectorAll("div.myText");

button.forEach((buttons) => {
  buttons.addEventListener("click", function display() {
    console.log("hello");
  });
});

display.forEach((invis) => {
  invis.classList.toggle("hide");
});
