// create div grid
const wrapper = document.querySelector(".wrapper");
let cellCountRow = 16;

drawGrid();

function drawGrid() {
    wrapper.style.cssText = `grid-template-columns: repeat(${cellCountRow}, 1fr);`;

    for (let i = 0; i < Math.pow(cellCountRow,2); i++) {
        let cell = document.createElement("div");
        wrapper.appendChild(cell);
    }   

    let cells = document.querySelectorAll(".wrapper div");

    // hover effect
    cells.forEach(cell => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.opacity+=0.1;
            e.target.style.background="black";
            //e.target.style.background=randomColor();
        })
    }); 
}

//reset
const btnReset = document.querySelector("button");

btnReset.addEventListener("click", (e) => {
    wrapper.innerHTML = '';
    do {
        cellCountRow = prompt("How many cells should the new grid have on each side?");
    }
    while (cellCountRow > 100)
    
    drawGrid();  
})

function randomColor () {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}