// Create gameboard object, incl gameboard as array
// function to update board
const gameBoard = (() => {
    // start with clean board
    const tiles = new Array(9);

    const drawBoard = () => {
        //refresh view
        Array.prototype.forEach.call( document.querySelectorAll(".wrapper div.tile"), function( node ) {
            node.parentNode.removeChild( node );
        });
        const boardDiv = document.querySelector(".wrapper");

        tiles.forEach((tile) => {
            const tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.textContent = tile;
            boardDiv.appendChild(tileDiv);
        });
    }

    const updateBoard = (x,y,symbol) => {
        const move = x * y - 1;
        if(tiles[move]) {
            console.log("Tile already filled");
            return false
        }
        else {
            console.log(`Tile ${x}/${y} filled with ${symbol}`);
            tiles[move] = symbol;
            return true
        }
    }
    return {tiles, updateBoard}
})();

// Create player object 
// assign symbol
// assign name
const Player = (name, symbol) => {
    //maybe function to keep score?
    return {name, symbol}
}

const playerX = Player("playerX","x");
const playerO = Player("playerO","O");

// Create object to control flow of the game "game" / displayController
// add functions that allow player to mark spots on the board
// check when game is over
// start with X to make a move
const game = (() => {
    const checkEnd = () => {
        //check vertically
        //check horizontally
        //check diagonally
        //check tie (full game board)
        return false
    }

    //start with X
    let activePlayerX = true;
    // continue to let players take turns
    while (!checkEnd) {
        // listen to board click
        gameBoard.updateBoard(1, 1, activePlayerX ? "x" : "o")
        // every turn check victory / tie condition
        checkEnd();
        activePlayerX == !activePlayerX;
    }

})();

// as little global code as possible, everything inside module/factory
// use module if you need one of sth, else factory