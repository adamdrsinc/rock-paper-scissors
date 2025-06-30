const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;


function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    console.log("Welcome to rock paper scissors!");

    for(let i = 0; i < 5; i++){
        const roundResult = playRound();
        //If draw
        if(roundResult === null){
            console.log("Draw!");
            continue;
        } else if (roundResult) { //If human wins
            console.log("Human wins!");
            humanScore++;
        } else { //If computer wins
            console.log("Computer wins!");
            computerScore++;
        }
    }

    console.log("Here are the scores!");
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Human throws ${humanChoice}!`);
    console.log(`Computer throws ${computerChoice}`);

    if(humanChoice == computerChoice){
        return null;
    }

    if(humanChoice === rock){
        return computerChoice === scissors ? true : false;
    } else if (humanChoice === paper){
        return computerChoice === rock ? true : false;
    } else if (humanChoice === scissors){
        return computerChoice === paper ? true : false;
    }
}


function getComputerChoice(){
    let number = Math.random();
    if(number < 0.34){
        return rock;
    } else if (number < 0.67) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice(){
    let humanIntChoice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors:");

    switch(parseInt(humanIntChoice)){
        case 1 : {
            return rock;
        }
        case 2 : {
            return paper;
        }
        case 3 : {
            return scissors;
        }
        default : {
            return "";
        }
    }
}