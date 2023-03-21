//let answer=prompt("Please enter either Rock, Paper, or Scissors.");
//let playerSelection=answer.toLowerCase().trim();
let computerSelection=getComputerChoice();





function getComputerChoice(){
    let x=Math.random();
    console.log(x);
    if(x==0){
        return "rock"
    }
    else if (x==1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function round(playerSelection, computerSelection){
    if(playerSelection==="rock"&&computerSelection==="scissors" || playerSelection==="paper"&&computerSelection==="rock" || playerSelection==="scissors"&&computerSelection==="paper"){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

