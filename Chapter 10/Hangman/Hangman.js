let test = ["Hello", "Yes", "Bye"];
let game = { word: "", Solution: "", puzzle: [], count: 0 };

gameAr = document.querySelector(".gameArea");
scr = document.querySelector(".score");
puzz = document.querySelector(".puzzle");
lett = document.querySelector(".letters");
str = document.querySelector(".Start");

str.addEventListener("click", startGame);

function startGame() {
  if (test.length > 0) {
    str.style.display = "none";
    game.puzzle = [];
    game.count = 0;
    game.words = game.shift();
    game.solution = game.words.split("");
    builder();
  }
}

function builder() {
  lett.innerHTML = "";
  puzz.innerHTML = "";
  game.Solution.forEach((le) => {
    let div = genPageElement("div", puzz, "-", ".box");
    if (le == "") {
      div.style.border = "white";
      div.textContent = "";
    } else {
      game.count++;
    }
    game.puzzle.push(div);
  });
}
function genPageElement(elType, elParent, output, clas) {
  var temp = document.createElement(elType);
  temp.classList.add(clas);
  elParent.appendChild(temp);
  temp.textContent = output;
  return temp;
}

for (i = 0; i < 26; i++) {
  let temp = String.fromCharCode(65 + i);
  let div = genPageElement("div", letters, temp, "box");
  function checker() {
    div.backgroundColor = "#ddd";
    div.classList.remove("box");
    div.classList.add("nbox");
    div.removeEventListener("click", checker);
    checkLetter(temp);
  }
  div.addEventListener("click", checker);
}

function checkLetter(letter) {
   game.Solution.forEach((el,index) => {
if (el.toUpperCase() == letter) {
    game.puzzle[index].textContent = letter;
    game.total--;
    updateScore();
}

   })
    }
    

    function updateScore() {
        scr.textContent = game.count;
        if(game.count <= 0) 
        {
            console.log("game over");
            scr.textContent = "Over"
            str.style.display = "block"
        }
    }


