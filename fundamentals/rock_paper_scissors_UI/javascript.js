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

    roundCount++;
    if (result == "won") playerScore++;
    else if (result == "lost") computerScore++;

    
    resultOutput.innerHTML = `
        <p>Round ${roundCount}</p>
        <p>Player chose: ${playerSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>Result: ${result}</p><br/><br/>
        <p>Score: ${playerScore}:${computerScore}</p>
        `;

}

const btnRock = document.querySelector("#btnrock");
const btnPaper = document.querySelector("#btnpaper");
const btnScissors = document.querySelector("#btnscissors");
const btnReset = document.querySelector("#btnreset");
const resultOutput = document.querySelector("#results");
let roundCount = 0;
let playerScore = 0;
let computerScore =0;
btnRock.addEventListener("click",() => {playRound("rock",computerPlay())});
btnPaper.addEventListener("click",() => {playRound("paper",computerPlay())});
btnScissors.addEventListener("click",() => {playRound("scissors",computerPlay())});
btnReset.addEventListener("click",() => {
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    resultOutput.innerHTML = "Start a new game!";
});