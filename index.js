let moves = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let choice = moves[Math.floor(Math.random() * moves.length)];
    return choice;
}

let getHumanChoice = () => {
    let choice = prompt("What's your choice? Enter rock, paper, or scissors:").toLowerCase();
    return choice;
} 

function playRound(getComputerChoiceFn, getHumanChoiceFn) {
    let computerChoice = getComputerChoiceFn();
    let humanChoice = getHumanChoiceFn();

    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        console.log("It's a draw!");
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
    else {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
    console.log("-------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------")
}



function playGame(times) {
    for (i = 0; i < times; i++) {
        playRound(getComputerChoice, getHumanChoice);
    }
    if (humanScore > computerScore) {
        console.log("HUMAN IS THE WINNER")
    }
    else if (humanScore < computerScore) {
        console.log("COMPUTER IS THE WINNER")
    }
    else {
        console.log("DRAWWWWW!!!")
    }
}

let times = prompt("how many rounds do you want to play?");
playGame(times);