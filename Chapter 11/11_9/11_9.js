drag = document.getElementById("dragme");
boxes = document.querySelectorAll(".box");

drag.addEventListener("dragstart", (event) => {
  drag.style.opacity = "0.5";
  console.log("it has begun")
});

drag.addEventListener("dragend", (event) => {
  event.preventDefault();
});

boxes.forEach((boxs) => {
  boxs.addEventListener("dragenter", (e) => {
    e.target.classList.add("red");
  });

  boxs.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  boxs.addEventListener("dragleave", () => {
    boxs.classList.remove("red");
  });

  boxs.addEventListener("drop", (e) => {
    e.preventDefault();
    e.target.appendChild(dragme);
  });
});
