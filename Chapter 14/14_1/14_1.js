var newfile = document.querySelector(".File");
var op = document.querySelector(".output");

newfile.addEventListener("change", reader);

function reader(event) {
  files = event.target.files;

  for (i = 0; i < files.length; i++) {
    file = files[i];
    let image = document.createElement("img");
    image.classList.add("thumb");
    image.file = file;
    op.appendChild(image);
    const reader = new FileReader();
    reader.addEventListener("load", (function (img) {
        return function (event) {
          img.src = event.target.result;
        };
      })(image));
      reader.readAsDataURL(file);
    }
  }
