window.onload = init;

var control = document.querySelector(".controls");
var clear = document.querySelector(".clear");
var penColor = document.querySelector("#pencolor");
var penWidth = document.querySelector("#penWidth");
let canva = document.querySelector("#canvas");
let pos = {
  x: 0,
  y: 0,
};

ctx = canva.getContext("2d");
clear.addEventListener("click", () => {
  const conf = confirm("Do you want  to clear?");
  if (conf) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

function setPosition(e) {
  pos.x = e.pageX;
  pos.y = e.pageY;
}

function draw(e) {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = penColor.value;
  ctx.lineWidth = penWidth.value;
  ctx.lineCap = "round";

  ctx.stroke();
}

function init() {
  canva.addEventListener("mousemove", draw);
  canva.addEventListener("mousemove", setPosition);
  canva.addEventListener("mouseenter", setPosition);
}


