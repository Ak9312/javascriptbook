let act = document.querySelector(".active")
let op = document.querySelector(".output")

act.addEventListener("mouseover", () => {
    act.classList.add("active")

})

act.addEventListener("mouseout", () => {
    act.classList.remove("active")
})


act.addEventListener("mousemove", (x) => { op.textContent = "Position of X is " + x.clientX + " Position of Y is " + x.clientY;

})



