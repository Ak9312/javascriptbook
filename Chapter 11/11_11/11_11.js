const box = document.querySelector(".box");
let details = { speed: 10, direction: 20, position: 40 };

box.addEventListener("click", () => {
  let x = 30;
  setInterval(function () {
    if (x < 1) {
      clearInterval();
    } else {
      if (details.position >= 800 || details.position < 0) {
          details.direction = details.direction * -1;
      }
      x--;
      details.position = details.position + details.speed * details.direction;
      box.style.left = details.position + "px";
      console.log(details.position);
  }
}, 200);
});
