var button = document.querySelectorAll(".title");
var display = document.querySelectorAll(".myText");

button.forEach((buttons) => {
  buttons.addEventListener("click", function display() {
    remove()
    console.log(buttons.nextElementSibling);
    buttons.nextElementSibling.classList.toggle("active") });
  
});

function remove() {display.forEach((invis) => {
  invis.classList.remove("active");
})};

