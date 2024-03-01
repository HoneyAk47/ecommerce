let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let h4 = document.getElementsByTagName("h4")[0]; // assuming there is only one <h4> element
let reset =document.getElementById("reset");
rock.addEventListener("click", checkrock);
paper.addEventListener("click",checkpaper);
scissor.addEventListener("click",checkscissor);
reset.addEventListener("click",reset1);

function checkrock() {
    let computerChoice = generateComputerChoice();
    if (computerChoice === "paper") {
        h4.innerText = "Computer wins";
    } else if (computerChoice === "scissor") {
        h4.innerText = "You win";
    } else {
        h4.innerText = "It's a tie";
    }
}
function reset1()
{
    h4.innerHTML="PLAY AGAIN"
 
}
function checkpaper() {
    let computerChoice = generateComputerChoice();
    if (computerChoice === "scissor") {
        h4.innerText = "Computer wins";
    } else if (computerChoice === "rock") {
        h4.innerText = "You win";
    } else {
        h4.innerText = "It's a tie";
    }
}
function checkscissor() {
    let computerChoice = generateComputerChoice();
    if (computerChoice === "paper") {
        h4.innerText = "You wins";
    } else if (computerChoice === "rock") {
        h4.innerText = "Computer wins";
    } else {
        h4.innerText = "It's a tie";
    }
}

function generateComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    // Map the random number to rock, paper, or scissor
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

