let imageSelect = document.querySelector("#UploadImage");
let canvas = document.querySelector("#Canvas");
let ctx = canvas.getContext("2d");

imageSelect.addEventListener(
  "change",
  () => {
    let file = new FileReader();
    file.onload = function (event) {
      let img = new Image();
    
      img.onload = function() {
        canvas.width = img.width/2;
canvas.height = img.height/2;
ctx.drawImage(img, 0, 0);
}
img.src = event.target.result;
};
   file.readAsDataURL(imageSelect.files[0])  

  
  },
  
);
