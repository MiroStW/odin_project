// Create gameboard object, incl gameboard as array

const gameBoard = (() => {
    // start with clean 3x3 board
    let grid = [[],[],[]];
    
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", () => {
        if(confirm("are you sure?")) resetBoard()
    })

    

    const drawBoard = () => {
        // delete old board
        Array.prototype.forEach.call( document.querySelectorAll(".wrapper div.tile"), function( node ) {
            node.parentNode.removeChild( node );
        });
        const boardDiv = document.querySelector(".wrapper");
        // draw updated board
        for (let i = 0; i < 3; i++) {
            const row = grid[i];
            for (let j = 0; j < 3; j++) {
                const tile = grid[i][j];
            
                const tileDiv = document.createElement("div");

                tileDiv.classList.add("tile");
                if (tile) tileDiv.textContent = tile.symbol;

                const x = i + 1
                const y = j + 1;
                tileDiv.addEventListener("click", () => {
                    // console.log("click: " + x + "/" + y);
                    game.playRound(x,y);
                });

                boardDiv.appendChild(tileDiv);
            }
        }
    }

    const updateBoard = (x,y,player) => {
        if (!x) {return drawBoard()} 
        if(grid[x-1][y-1]) {
            console.log("Tile already filled");
            return false
        }
        else {
            grid[x-1][y-1] = player;
            drawBoard();
            return true
        }
    }

    const checkEnd = () => {
        //check horizontally
        for (let i = 0; i < 3; i++) {
            if(
                grid[i][0] &&
                grid[i][0] == grid[i][1] &&
                grid[i][0] == grid[i][2]
            )
            return showResult(grid[i][0])
        }

        //check vertically
        for (let i = 0; i < 3; i++) {
            if(
                grid[0][i] &&
                grid[0][i] == grid[1][i] &&
                grid[0][i] == grid[2][i]
            )
            return showResult(grid[0][i])
        }

        //check diagonally
        if (
            grid[1][1] &&
            ((grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) ||
            (grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0]))
        )
        return showResult(grid[1][1]);

        //check tie (full game board)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                //if still an empty tile return false
                if (!grid[i][j]) return false;
            }
        }
        // if all tiles full
        return showResult();
    }

    const showResult = (winner) => {
        const boardDiv = document.querySelector(".wrapper");
        const resultPopoverContainer = document.createElement("div");
        resultPopoverContainer.classList.add("popoverContainer");
        const resultPopover = document.createElement("div");
        resultPopover.classList.add("popover");

        const para = document.createElement("p");
        const resultImg = document.createElement("img")
        if(winner) {
            para.textContent = "The winner is " + winner.name;
            resultImg.setAttribute("src","winner.png")
        } else {
            para.textContent = "It's a tie!";
            resultImg.setAttribute("src","tie.png");
        }
        resultPopover.appendChild(para);
        resultPopover.appendChild(resultImg);

        const restartBtn = document.createElement("button");
        restartBtn.textContent = "New game!";
        restartBtn.addEventListener("click", () => {resetBoard()});
        resultPopover.appendChild(restartBtn);
        
        resultPopoverContainer.appendChild(resultPopover);
        boardDiv.appendChild(resultPopoverContainer);
    }

    const resetBoard = () => {
        grid = [[],[],[]];
        drawBoard();
        document.querySelector(".popover").remove();
    }

    return {updateBoard, checkEnd, showResult, resetBoard}
})();

// Create player object 
const Player = (name, symbol) => {
    //maybe function to keep score?
    return {name, symbol}
}
// create players with name & symbol
const playerX = Player("Devil","😈");
const playerO = Player("Angel","😇");

// Create object to control flow of the game "game" / displayController
// add functions that allow player to mark spots on the board
// check when game is over
// start with X to make a move
const game = (() => {
    //initialise board
    gameBoard.updateBoard();

    //start with X
    let activePlayerX = true;

    //function to play round
    const playRound = (x,y) => {
        //only continue if new tile was filled
        if (gameBoard.updateBoard(x, y, activePlayerX ? playerX : playerO))
         {
            gameBoard.checkEnd();
            activePlayerX = !activePlayerX;
        }
    }

    // continue to let players take turns


    return {playRound}
})();

// as little global code as possible, everything inside module/factory
// use module if you need one of sth, else factory