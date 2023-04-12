let playerScore=0;
let computerScore=0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const pScore=document.querySelector("#player");
const cScore=document.querySelector("#computer");
const result=document.querySelector("#result");

//rockBtn.addEventListener('click', ()=>{console.log(round('rock',getComputerChoice()));});

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
    else if(playerSelection===computerSelection){
        return `It's a tie! You both picked ${playerSelection}!`
    }
    else{
        computerScore+=1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function finalScore(){
    if(playerScore>computerScore){
        result.innerHTML="Congrats! You win! Pick another option to play again.";
    }
    else if(playerScore===computerScore){
        result.innerHTML="You tied! Pick another option to play again.";
    }
    else{
        result.innerHTML="Sorry! Computer won! Pick another option to play again.";
    }
    playerScore=0;
    computerScore=0;
}

function game(){
    playerScore=0;
    computerScore=0;

        rockBtn.addEventListener('click', ()=>{result.innerHTML=(round('rock',getComputerChoice()));
            pScore.innerHTML= "Player Score: "+playerScore;    
            cScore.innerHTML= "Computer Score: "+computerScore;
            if(playerScore==5 || computerScore==5){finalScore();} 
        });
        paperBtn.addEventListener('click', ()=>{result.innerHTML=(round('paper',getComputerChoice()));
            pScore.innerHTML= "Player Score: "+playerScore;    
            cScore.innerHTML= "Computer Score: "+computerScore;
            if(playerScore==5 || computerScore==5){finalScore();}  
        });
        scissorsBtn.addEventListener('click', ()=>{result.innerHTML=(round('scissors',getComputerChoice()));
            pScore.innerHTML= "Player Score: "+playerScore;    
            cScore.innerHTML= "Computer Score: "+computerScore; 
            if(playerScore==5 || computerScore==5){finalScore();} 
        });
    

}

