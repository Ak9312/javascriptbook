var canvas = document.querySelector("#Canvas");
var ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height / 2;
let Xdir = 1;
let Ydir = 1;

function ballDraw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ballDraw();
  if (x > canvas.width   || x < 10) {
    Xdir = Xdir * -1;
  }
  if (y > canvas.height || y < 10  ) {
    Ydir = Ydir * -1;
  }
  x = x + Xdir;
  y = y + Ydir;
}
setInterval(moveBall, 10);
