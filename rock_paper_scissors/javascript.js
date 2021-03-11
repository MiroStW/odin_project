function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    return options[random(0,2)]
}

function random (min, max) {
    return Math.round(Math.random()*(max - min) + min)
}

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection == "rock") {
        result = computerSelection == "rock" ? "draw"
            : computerSelection == "paper" ? "lost"
            : "won";
    }
    else if (playerSelection == "paper") {
        result = computerSelection == "rock" ? "won"
            : computerSelection == "paper" ? "draw"
            : "lost"
    }
    else if (playerSelection == "scissors") {
        result = computerSelection == "rock" ? "lost"
            : computerSelection == "paper" ? "won"
            : "draw"
    }
    return result
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

function game () {

    let ScorePlayer = 0;
    let ScoreComputer = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay();

        let result = playRound (playerSelection, computerSelection);
        result == "won" ? ScorePlayer += 1
        : result == "lost" ? ScoreComputer += 1
        : false;

        console.log("Player chose " + playerSelection + ", Computer chose " + 
                computerSelection);
        console.log(result + "!");
        console.log(`Score is ${ScorePlayer}:${ScoreComputer}`);
    }

    ScorePlayer > ScoreComputer ? console.log(`You won with a score of ${ScorePlayer}:${ScoreComputer}`)
            : ScorePlayer < ScoreComputer ? console.log(`You lost with a score of ${ScorePlayer}:${ScoreComputer}`)
            : console.log(`Its a draw with a score of ${ScorePlayer}:${ScoreComputer}`)

}