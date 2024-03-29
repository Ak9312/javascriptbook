track = [];
var cont = document.querySelector(".container");
var boxes = document.querySelectorAll(".box");

boxes.forEach((boxz) => {
  boxz.addEventListener("click", logging);
});

function logging(event) {
  const target = event.target;
  const va = {
    textContent: target.textContent,
    id: target.getAttribute("id"),
    tag: target.tagName,
    class: target.getAttribute("class"),
  };
  if (va.id != null ){
  track.push(va);
  console.log(track);
  }
}

