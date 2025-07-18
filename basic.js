const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;
const maxRounds = 5;

const allButtons = document.querySelectorAll(".gameButton");
for(const button of allButtons){
    button.addEventListener('click', () => playRound(button.value));
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    updateResults();

    document.querySelector("#gameResults").innerHTML = "";
}

function playRound(humanChoice){
    if(humanScore + computerScore >= maxRounds){
        resetGame();
        return;
    }

    let computerChoice = getComputerChoice();

    console.log(`Human throws ${humanChoice}!`);
    console.log(`Computer throws ${computerChoice}`);

    if(humanChoice == computerChoice){
        return null;
    }

    let result = true;
    if(humanChoice === rock){
        result = computerChoice === scissors ? true : false;
    } else if (humanChoice === paper){
        result = computerChoice === rock ? true : false;
    } else if (humanChoice === scissors){
        result = computerChoice === paper ? true : false;
    }

    incrementScore(result);
    addRoundResult(humanChoice, computerChoice, result);
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

    const humanChoiceElement = createChoiceElement("Human", humanChoice);
    const computerChoiceElement = createChoiceElement("Computer", computerChoice);
   
    let text = humanWon ? "Human wins!" : "Computer Wins!";
    const resultTextElement = document.createElement("p");
    resultTextElement.textContent = text;

    resultDiv.appendChild(humanChoiceElement);
    resultDiv.appendChild(computerChoiceElement);
    resultDiv.appendChild(resultTextElement);

    const gameResults = document.querySelector("#gameResults");
    gameResults.appendChild(resultDiv);

    updateResults();
}

function updateResults(){
    //Change the on screen results
    const humanScoreEl = document.querySelector("#humanScore");
    const computerScoreEl = document.querySelector("#computerScore");

    humanScoreEl.textContent = "Human Score: " + humanScore;
    computerScoreEl.textContent = "Computer Score: " + computerScore;

    if(humanScore + computerScore === maxRounds){
        const winner = humanScore > computerScore ? "Human" : "Computer";
        const winnerEl = document.createElement("h2");
        winnerEl.classList.add("h2Title");
        winnerEl.textContent = `${winner} wins!`;

        document.querySelector("#gameResults").appendChild(winnerEl);
    }
}

function createChoiceElement(player, choiceText){
    const choiceElement = document.createElement("p");
    choiceElement.textContent = `${player} throws ${choiceText}!`;

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


