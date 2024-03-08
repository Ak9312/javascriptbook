const a = 10
const b = 3

let operator  = "-"

function calc (a,b,op) {
  if(op=="+") {
    console.log(a+b)
  }
  else {
    console.log(a-b)
  }
}

calc(a,b,"+")
calc(a,b,"-")