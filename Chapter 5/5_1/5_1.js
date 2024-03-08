let max;

let sol = Math.random() * 6;
sol = Math.floor(sol);
console.log(sol);
let input 
let status = false;

while (input == null) {
   input =  prompt("Plese enter value between 1 to 5")
   console.log(input)
if (input> sol)
{
    console.log(input, "is larger by user")
}

if (input == sol)
{
    console.log("Both are equal")
}

if (input < sol){
    console.log(sol, "is larger by computer" )
}
}