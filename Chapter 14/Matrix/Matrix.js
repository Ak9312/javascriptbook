canva = document.querySelector("#Canvas");
ctx = canva.getContext("2d");

colVal = [];
for (i = 0; i < 50; i++) {
  colVal.push(0);
}

function matrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, canva.width, canva.height);
  ctx.fillStyle = "green";
  colVal.map((posY , index) => {
    const randomValue = Math.random() < 0.5 ? 0 : 1;
    posX = index * 10;
    ctx.fillText(randomValue,posX,posY)
    if( posY > 100 + Math.random()* 300){
        colVal[index] = 0;
    }
    else {
        colVal[index] = posY + 10;
    }
  });
}

setInterval(matrix, 50);
