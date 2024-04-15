const canvas = document.querySelector("#CanvasMain");
const ctx = canvas.getContext("2d");

//Main Face
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(110, 130, 80, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//Left Eye
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(70, 100, 15, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//Right Eye
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(150, 100, 15, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

//Nose
ctx.lineWidth = 0.5;
ctx.moveTo(110, 120);
ctx.lineTo(110, 140);
ctx.stroke();

//Mouth
ctx.lineWidth = 0.5;
ctx.moveTo(90, 150);
ctx.lineTo(130, 150);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(110, 150, 20, 0, Math.PI * 1);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Body

ctx.lineWidth = 0.5;
ctx.moveTo(110, 210);
ctx.lineTo(110, 290);
ctx.stroke();

//Arm
ctx.lineWidth = 0.5;
ctx.moveTo(30, 250);
ctx.lineTo(200, 250);
ctx.stroke();

//Left Leg
ctx.lineWidth = 0.5;
ctx.moveTo(110, 290);
ctx.lineTo(40, 310);
ctx.stroke();

// Right Leg
ctx.lineWidth = 0.5;
ctx.moveTo(110, 290);
ctx.lineTo(180, 310);
ctx.stroke();

//Hat
//Hat Base

ctx.lineWidth = 0.5;
ctx.moveTo(60, 60);
ctx.lineTo(150, 60);
ctx.stroke();

ctx.lineWidth = 0.5;
ctx.moveTo(60, 60);
ctx.lineTo(95, 15);
ctx.stroke();

ctx.lineWidth = 0.5;
ctx.moveTo(150, 60);
ctx.lineTo(95, 15);
ctx.stroke();

// Hat Color
ctx.beginPath();
ctx.fillStyle = "blue"; 
ctx.moveTo(60, 60);
ctx.lineTo(150, 60);
ctx.lineTo(95, 15);
ctx.fill();
ctx.closePath();
