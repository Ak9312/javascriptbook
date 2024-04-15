let canvas = document.querySelector("#Canvas1");
let ctx = canvas.getContext("2d");
ctx.font = "italic 40px Arial";
let txt = "Hello World";
ctx.fillStyle = "blue";
ctx.fillText(txt, 60, 80);
ctx.fill();


for (i = 1 ; i<11; i++){
 txt = "counter:" + i ;
ctx.fillStyle = "red";
ctx.font = " 20px Arial";
ctx.fillText(txt,100, (90 + (40*i)));
ctx.fill();
}