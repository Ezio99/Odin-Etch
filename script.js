
let container = document.querySelector("#Container")
const button = document.querySelector("#Squares-request")
const reset = document.querySelector("#Reset")
const body = document.querySelector("body")


button.addEventListener("click", getSquares)

reset.addEventListener("click",resetGrid)

generateGrid(16)





function generateGrid(squares) {
    const totalSquares = squares * squares
    const dimension = 640 / squares;
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div")
        div.classList.add("grid-square")
        div.style.height = `${dimension}px`
        div.style.flexBasis = `${dimension}px`


        div.addEventListener("mouseenter", addColourToSquare)
        div.addEventListener("click", addColourToSquare)

        container.appendChild(div)
    }
}

function addColourToSquare(e) {
    console.log(e)
    let div = e.currentTarget

    if (e.type === "mouseenter" && e.buttons == 1) {
        div.classList.add("current-color")
    }

    if (e.type === "click") {
        div.classList.add("current-color")
    }


}

function getSquares() {
    let squares = +prompt("Number of squares per side (<100)") // + makes it into a number

    if(squares>100){
        alert("Please enter <100 squares per side")
        return
    }


    container.remove()
    container = document.createElement("div")
    container.id = "Container"
    body.appendChild(container)
    generateGrid(squares)
}


function resetGrid(){
    const gridSquares = document.querySelectorAll(".grid-square")
    gridSquares.forEach(i => i.classList.remove("current-color"))
}

