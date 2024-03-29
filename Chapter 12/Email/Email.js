let txt1 = document.getElementById("one");
let txt2 = document.getElementById("two");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const email = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
  accept = [];
  if (txt1.value.match(email)) {
    accept.push(txt1.value);
  }
  holder = [];
  for (i = 0; i < accept.length; i++) {
    let check = accept[i];
    if (!holder.includes(check)) {
      holder.push(check);
   

    }

  }
  txt2.textContent += holder.join(", ")  
});
