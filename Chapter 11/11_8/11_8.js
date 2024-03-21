output = document.querySelector(".output");
eles = document.querySelectorAll("input[type=text]");

eles.forEach((element) => {
  element.addEventListener("keyup", function (event) {
    console.log("Keyup:" + event.target.value);
  });

  element.addEventListener("paste", function () {
    console.log("paste");
  });

  element.addEventListener("keydown", function (event) {
    mess(!isNaN(event.key));
    return !isNaN(event.key);
    function mess(m) {
      if (m === true) {
        output.innerHTML += event.key;
      }
    }
  });
 
});
