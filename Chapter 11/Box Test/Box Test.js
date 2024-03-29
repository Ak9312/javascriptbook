let ob = document.querySelector(".output");
let mes = document.querySelector(".message");

let game = {
  timer: 0,
  start: null,
};
mes.textContent = "Press  to Start";
nu = document.createElement("div");
ob.appendChild(nu);
nu.classList.add("box");

nu.addEventListener("click", () => {
 
  nu.style.display = "none";
  game.timer = setTimeout(addBox,randon(1000));
  if (game.start === null) {
    mes.textContent = "loading";
  } else {
    curr = new Date().getTime();
    mes.textContent =  "Time is " + ((curr - game.start) / 1000) + " seconds";
  }
  function addBox() {
    game.start = new Date().getTime();
    mes.textContent = "Click it ....";
    nu.style.display = "block";
    nu.style.left = randon(450) + "px"
    nu.style.bottom = randon(450) + "px"
  }
});

function randon(x) {
  return Math.floor(Math.random() * x);
}

