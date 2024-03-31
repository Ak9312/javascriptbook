function app() {
  cl1 = document.querySelector("span.val1");
  cl2 = document.querySelector("span.val2");
  txt = document.querySelector("input[type= text][name= answer]");
  bt = document.querySelector("button");
  op = document.querySelector(".output");
  game = {
    num1: 0,
    num2: 0,
    sum: 0,
  };

  function init() {
    bt.addEventListener("click", checker);
    loadQuestion(1, 10);
  }
  init();
  function loadQuestion(min, max) {
    game.num1 = Math.floor(Math.random() * (max - min)) + 1;
    game.num2 = Math.floor(Math.random() * (max - min)) + 1;
    game.sum = game.num1 + game.num2;
    cl1.textContent = game.num1;
    cl2.textContent = game.num2;
  }

  function checker() {


    var res = document.createElement("div");

    res.textContent =
      txt.value === game.sum.toString()
        ? "Your answer is  " +
          txt.value +
          " Actual answer is " +
          game.sum +
          " It is Correct"
        : "Your answer is  " +
          txt.value +
          " Actual answer is " +
          game.sum +
          " It is Wrong";

    res.style.color = txt.value === game.sum.toString() ? "Green" : "Red";
    op.appendChild(res);
    txt.value = "";
    loadQuestion(1, 9);
  }

}

addEventListener("DOMContentLoaded",app);
