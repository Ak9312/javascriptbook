Game = ["Rock", "Paper", "Scissors"];
let choice = Math.random();
choice = choice * 3;
choice = Math.floor(choice)
console.log(choice);
//User Value
// user = prompt("Choose between 0 - Rock, 1 - Paper, 2- Scissors")
let user = Math.random()
user = user * 3
user = Math.floor(user)
console.log(user)
// To check array
console.log("Computer chose " +  Game[choice])
console.log("You chose "  + Game[user] )


if (user === choice ){
    console.log("Its a tie")
}
else if (user == 0 && choice  == 2 ) {
    console.log("User Wins")
}
else if (user == 2 && choice  == 0 ) {
    console.log("Computer Wins")
}

else if (user == 1 && choice  == 0 ) {
    console.log("User Wins")
}
else if (user == 0 && choice  == 1 ) {
    console.log("Computer Wins")
}

else if (user == 2 && choice  == 1 ) {
    console.log("User Wins")
}
else if (user == 1 && choice  == 2 ) {
    console.log("Computer Wins")
}