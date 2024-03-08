var prize = prompt("Please enter Value Between 1 and 10");
value = prize % 10;
let output = "My Selection:";

switch (value) {


  
 
  case 9:
    response = "You win big";
    break;

  case 8:
  case 7:
  case 6:
  case 5:
    response = "You could have won big";
    break;

  case 4:
  case 3:
  case 2:
  case 1:
    response = "You are lucky to break even";
    break;

  default:
    response = "Oh what a pity";
}

console.log(output + " " + response);
