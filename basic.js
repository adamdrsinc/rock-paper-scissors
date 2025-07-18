const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

const allButtons = document.querySelectorAll(".gameButton");
for(const button of allButtons){
    button.addEventListener('click', () => playRound(button.value));
}


function getRoundResult(humanChoice){
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

function playRound(humanChoice){
    const result = getRoundResult(humanChoice);
    incrementScore(result);
    addRoundResult(humanChoice, computerChoice, result);
}

function incrementScore(result){
    if(result){
        humanScore++;
    } else {
        computerScore++;
    }
}

function addRoundResult(humanChoice, computerChoice, humanWon){
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("gameResult");

    const humanChoiceElement = createChoiceElement(humanChoice);
    const computerChoiceElement = createChoiceElement(computerChoice);
   
    let text = humanWon ? "Human wins!" : "Computer Wins!";
    const resultTextElement = document.createElement("p");
    resultTextElement.textContent = text;

    resultDiv.appendChild(humanChoiceElement);
    resultDiv.appendChild(computerChoiceElement);
    resultDiv.appendChild(resultTextElement);

    const gameResults = document.getSelection("#gameResults");
    gameResults.appendChild(resultDiv);
}

function createChoiceElement(choiceText){
    const choiceElement = document.createElement("p");
    choiceElement.textContent = choiceText;

    return choiceElement;
}

// function playRound(){
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();

//     console.log(`Human throws ${humanChoice}!`);
//     console.log(`Computer throws ${computerChoice}`);

//     if(humanChoice == computerChoice){
//         return null;
//     }

//     if(humanChoice === rock){
//         return computerChoice === scissors ? true : false;
//     } else if (humanChoice === paper){
//         return computerChoice === rock ? true : false;
//     } else if (humanChoice === scissors){
//         return computerChoice === paper ? true : false;
//     }
// }

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;


//     console.log("Welcome to rock paper scissors!");

//     for(let i = 0; i < 5; i++){
//         const roundResult = playRound();
//         //If draw
//         if(roundResult === null){
//             console.log("Draw!");
//             continue;
//         } else if (roundResult) { //If human wins
//             console.log("Human wins!");
//             humanScore++;
//         } else { //If computer wins
//             console.log("Computer wins!");
//             computerScore++;
//         }
//     }

//     console.log("Here are the scores!");
//     console.log(`Human Score: ${humanScore}`);
//     console.log(`Computer Score: ${computerScore}`);
// }

// function getHumanChoice(){
//     let humanIntChoice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors:");

//     switch(parseInt(humanIntChoice)){
//         case 1 : {
//             return rock;
//         }
//         case 2 : {
//             return paper;
//         }
//         case 3 : {
//             return scissors;
//         }
//         default : {
//             return "";
//         }
//     }
// }


