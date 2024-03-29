op = document.getElementById("output");
first = document.getElementById("sText");
second = document.getElementById("rText");

document.querySelector("button").addEventListener("click", lookup);

function lookup() {
  s = op.textContent;
  rt = second.value;
  regex = new Regexp(first.value, "g");
  if (s.match(regex) != null) {
    let upd = s.replace(regex, rt);
    op.textContent = upd;
  }
}

