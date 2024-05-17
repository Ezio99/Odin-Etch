
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
    let div = e.currentTarget

    const rgb = randomRgbColor()

    if (e.type === "mouseenter" && e.buttons == 1) {
        div.style.cssText+= ` background-color : rgb(${rgb[0]},${rgb[1]},${rgb[2]});`
    }

    if (e.type === "click") {
        div.style.cssText+= ` background-color : rgb(${rgb[0]},${rgb[1]},${rgb[2]});`
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
    gridSquares.forEach(i => i.style.removeProperty("background-color"))
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    const r = randomInteger(255);
    const g = randomInteger(255);
    const b = randomInteger(255);

    return [r,g,b];

}



