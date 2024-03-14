document.getElementById("addNew").addEventListener("click", addOne);
function addOne() {
  let el = document.createElement("li");
  el.textContent = document.getElementById("addItem").value;
  document.getElementById("sList").appendChild(el);
}
