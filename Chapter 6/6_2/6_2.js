const desc = ['apple','car','dragon']

function func () {
    let p = prompt('Please enter name')
    rand  = Math.floor(Math.random()*3)
    const output = p + " , " + desc[rand]
    console.log(output)
}


func()