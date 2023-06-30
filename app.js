const buttons = document.querySelectorAll('button')
const resultEl  = document.getElementById('result')
const playerScoreEl = document.getElementById('user-score')
const computerScoreEl = document.getElementById('computer-score')

let playScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
   button.addEventListener('click', ()=>{
    // console.log("User Choices", button.id , "computer Choices" ,computerChoose())
    const result =playRound(button.id , computerChoose())
    // console.log(result)
    resultEl.textContent = result;

   });
});

// Create Function Computer Choose

function computerChoose(){
    try{
    const Choices = ["rock" ,"paper" , "scissors"]
    const randomChoices = Math.floor(Math.random()* Choices.length)
    return Choices[randomChoices];
    }
    catch(error){
        console.log(error)

    }
}



function playRound(playerSelection , computerSelection){    

    if(playerSelection === computerSelection){
        return  "It's Tie🤣😂"
    }
    else if(
       (playerSelection==="rock" && computerSelection ==="scissors")||(playerSelection === "paper" && computerSelection ==="rock") || (playerSelection==="scissors" && computerSelection ==="paper")

    ){
        playScore++;
        playerScoreEl.textContent = playScore;
       return  " You win! "  + playerSelection + " Beats " + computerSelection;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore
        return   "You Lose😡! "+ computerSelection + " Beats "+  playerSelection ;
    }
}