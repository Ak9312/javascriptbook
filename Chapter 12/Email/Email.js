let txt1 = document.getElementById("one");
let txt2 = document.getElementById("two");
let btn = document.querySelector("#addEmail");
let btn2 = document.querySelector("#getEmail");
accept = [];
btn.addEventListener("click", () => {
  const email = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;

  if (txt1.value.match(email)) {
    if (!accept.includes(txt1.value)) {
      accept.push(txt1.value);
      txt1.value = "";
      console.log("entered email successfully!")
      return;
    }
    console.log(txt1.value + " already present");
    return;
  } else {
    console.log("please enter valid email");
    return;
  }
});

btn2.addEventListener("click",()=>{
  txt2.value = accept.join(',')
})
