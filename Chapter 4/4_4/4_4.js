let randomNumber = Math.random();

randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let userInput = prompt("please enter question");
// console.log("User Value is" + "  " +  userInput)

switch (randomNumber) {
  case 0:
    value = "Youre' right";
    break;

  case 1:
    value = "I dont think so";
    break;

  case 2:
    value = "Oh yes";
    break;

  case 3:
    value = "Cant say";
    break;

  case 4:
    value = "Most likely true";
    break;

  default:
    value = "Dont know dont  care";
}

console.log("Question : " + " " + userInput + "Answer :  " + value);
