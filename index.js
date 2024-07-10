let moves = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;
let round = 0;

let getComputerChoice = () => {
    return moves[Math.floor(Math.random() * moves.length)];
}

let roundP = document.querySelector(".round");
let score = document.querySelector(".score");
let move = document.querySelector(".move");
let gameResult = document.querySelector(".gameResult");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    round++;

    if (computerChoice === humanChoice) {
        move.textContent = `You chose: ${humanChoice} - Computer chose: ${computerChoice}`;
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++;
        move.textContent = `You chose: ${humanChoice} -  Computer chose: ${computerChoice}`
    }
    else {
        humanScore++;
        move.textContent = `You chose: ${humanChoice} -  Computer chose: ${computerChoice}`
    }

    roundP.textContent = "Round: " + round;
    score.textContent = `Score - Player: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            gameResult.textContent = 'You win, you beat the computer!!!'
        }
        else {
            gameResult.textContent = 'You lose, the computer beat you!!!'
        }
    }
    
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound('rock'));
paper.addEventListener("click", () => playRound('paper'));
scissors.addEventListener("click", () => playRound('scissors'))

function disableButton




