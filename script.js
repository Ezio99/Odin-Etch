
let container = document.querySelector("#Container")
const button = document.querySelector("#Squares-request")
const reset = document.querySelector("#Reset")
const body = document.querySelector("body")
let lightness = 100


button.addEventListener("click", getSquares)

reset.addEventListener("click", resetGrid)

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

    const hsl = randomHslColor()

    if (e.type === "mouseenter" && e.buttons == 1) {
        div.style.cssText += ` background-color : hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%);`
    }

    if (e.type === "click") {
        div.style.cssText += ` background-color : hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%);`
    }


}

function getSquares() {
    let squares = +prompt("Number of squares per side (<100)") // + makes it into a number

    if (squares > 100) {
        alert("Please enter <100 squares per side")
        return
    }


    container.remove()
    container = document.createElement("div")
    container.id = "Container"
    body.appendChild(container)
    generateGrid(squares)
}


function resetGrid() {
    const gridSquares = document.querySelectorAll(".grid-square")
    gridSquares.forEach(i => i.style.removeProperty("background-color"))
    lightness = 100
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomHslColor() {
    const h = randomInteger(360);
    const s = randomInteger(100);
    const l = lightness

    if (lightness > 0) {
        lightness -= 10
    }
    else {
        lightness = 100
    }


    return [h, s, l];

}



