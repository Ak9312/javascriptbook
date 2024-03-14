let color = true;

function message(a) {
    console.log(a);
  }
  
  window.onclick = function () {
    message(color);
    color = !color;


  
if (color === false) {
    document.body.style.backgroundColor = "black";
    document.getElementById("text").style.color = "white";
  } else {
     
  
    document.body.style.backgroundColor = "white";
    document.getElementById("text").style.color = "black";
  }
};