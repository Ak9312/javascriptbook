

window.onload = function (e) {
  message("Window Ready", e);
};


document.addEventListener("DOMContentLoaded", (b) => {
    message("Document Ready", b);
  });
   
function message(a, b) {
    console.log(a);
    console.log(b);
  }
  