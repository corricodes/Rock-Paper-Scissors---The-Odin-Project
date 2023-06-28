function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        return ("it's a draw!");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        return ("you win! rock beats scissors!");
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        return ("you lose! paper beats rock!");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        return ("you win! paper beats rock!");
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        return ("you lose! scissors beats paper!");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        return ("you win! scissors beats paper!");
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        return ("you lose! rock beats scissors!");
    }
  }
  
  let computerSelection = getComputerChoice();
  let humanSelection = prompt("choose your weapon");
  
  playRound(humanSelection, computerSelection);

console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection));