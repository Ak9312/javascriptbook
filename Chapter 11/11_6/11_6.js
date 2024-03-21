res = document.querySelectorAll(".box");
cont = document.querySelector(".container");
cont.addEventListener(
    "click",
    function () {
      console.log(1);
    },
    true
  );

cont.addEventListener(
    "click",
    function () {
      console.log(4);
    },
    false
  );





for (let i = 0; i < res.length ; i++) {
    res[i].addEventListener(
        "click",
        function () {
          console.log(2);
          console.log(res[i].textContent)
        },
        true
      )
  res[i].addEventListener(
    "click",
    function () {
      console.log(3);
      console.log(res[i].textContent)
    },
    false
  )

}
