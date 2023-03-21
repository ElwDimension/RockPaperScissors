let playerScore=0;
let computerScore=0;
game();



function getComputerChoice(){
    let x=Math.floor(Math.random() * 3);
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
        playerScore+=1;
        return `You win! ${playerSelection} beats ${computerSelection}!`;  
    }
    else{
        computerScore+=1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(){
    playerScore=0;
    computerScore=0;

    for (let i=0;i<5;i++){
        let answer=prompt("Please enter either Rock, Paper, or Scissors.");
        let playerSelection=answer.toLowerCase().trim();
        let computerSelection=getComputerChoice();
        console.log(round(playerSelection,computerSelection));
    }

    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)

    if(playerScore>computerScore){
        console.log(`Congrats! You win!`)
    }
    else{
        console.log(`Sorry! Computer won!`)
    }

}

