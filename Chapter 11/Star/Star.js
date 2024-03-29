const str = document.querySelectorAll(".star");
const op = document.querySelector(".output");

str.forEach((strr, index) => {
  strr.addEventListener("click", function starRate() {
    op.textContent = "You have clicked " + (index + 1) + " star";
    for (let i = 0; i < str.length; i++) {
     if (i <= index) {
        str[i].classList.add("orange")
     }
     else {
        str[i].classList.remove("orange")
     }
    }
  });
});
