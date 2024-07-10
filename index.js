let moves = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;
let round = 0;

let getComputerChoice = () => {
    return moves[Math.floor(Math.random() * moves.length)];
}

let resultDiv = document.querySelector(".result");
let para = document.createElement("p");
let score = document.createElement("span");
let rounds = document.createElement("p");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    round++;

    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        para.textContent = "Its a draw!";
        resultDiv.appendChild(para);
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++;
        para.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
        resultDiv.appendChild(para);
    }
    else {
        humanScore++;
        para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        resultDiv.appendChild(para);
    }

    rounds.textContent = "Round: " + round;
    resultDiv.appendChild(rounds);
    score.textContent = `Score - Player: ${humanScore}, Computer: ${computerScore}`;
    resultDiv.appendChild(score);
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound('rock'));
paper.addEventListener("click", () => playRound('paper'));
scissors.addEventListener("click", () => playRound('scissors'))




