function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    return options[random(0,2)]
}

function random (min, max) {
    return Math.round(Math.random()*(max - min) + min)
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log ("Draw! both chose the same");
        }
        else if (computerSelection == "paper") {
            console.log ("Your lose! Paper beats rock");
        }
        else console.log ("You win! Rock beats scissors");
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log ("You win! Rock beats paper");
        }
        else if (computerSelection == "paper") {
            console.log ("Draw! both chose the same");
        }
        else console.log ("You lose! Scissors beats paper");
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log ("You lose! Rock beats scissors");
        }
        else if (computerSelection == "paper") {
            console.log ("Your win! Scissors beats paper");
        }
        else console.log ("Draw! both chose the same");
    }
}

function getPlayerSelection () {
    let playerInput = prompt("Enter 'rock', 'paper' or 'scissors' to play");
    if (!playerInput) {
        console.log("Game canceled");
    }
    else {
        playerInput.toLowerCase();
        if (playerInput != "rock" 
            && playerInput != "paper"
            && playerInput != "scissors") {
                console.log ("You entered something else, Please try again or cancel.");
                playerInput = getPlayerSelection();
        } 
        else {
            return playerInput;
        }
    }
}

const playerSelection = getPlayerSelection();
const computerSelection = computerPlay();
console.log("Player chose " + playerSelection + ", Computer chose " + computerSelection);
playRound (playerSelection, computerSelection);