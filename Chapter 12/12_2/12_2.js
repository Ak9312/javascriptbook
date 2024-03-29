op = document.querySelector(".output");
ip = document.querySelector("input[type = text]");
bt = document.querySelector("button");

const email = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

bt.addEventListener("click", () => {
  val = ip.value;
  let out = "";
  let valid = val.match(email);
  if (valid != null) {
    out = "True";
    op.style.color = "Green";
  } else {
    out = "False";
    op.style.color = "Red";
  }
  op.textContent = out;
});
