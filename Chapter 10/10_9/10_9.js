const button = document.querySelectorAll("button");
button.forEach((buttons) => {
  function Output() {
    console.log(this.textContent);
  }
  buttons.addEventListener("click", Output);
});
