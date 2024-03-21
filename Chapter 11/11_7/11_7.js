outp = document.querySelector(".output1");
fname = document.querySelector("input[name ='first']");
lname = document.querySelector("input[name ='last']");

fname.addEventListener("change", display);
fname.addEventListener("focus", foc);

fname.addEventListener("blur", bdp);

lname.addEventListener("change", display);

lname.addEventListener("blur", bdp);
lname.addEventListener("focus", foc);
function display() {
  console.log("change");
  let p = fname.value;
      let q = lname.value;
      outp.innerText = "First Name: " + p + "Last Name: " + q;
}

function bdp() {
  console.log("blur");
  let p = fname.value;
  let q = lname.value;
  outp.innerText = "First Name: " + p + "Last Name: " + q;
}

function foc() {
    console.log("focus")
}