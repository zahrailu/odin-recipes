function playGame(){

let humanScore = 0;
let computerScore = 0;

//Computer Choice
function getComputerChoice (){
let randomNumber = Math.random()

if (randomNumber< 0.33){
  return "rock";
}
else if (randomNumber > 0.66){
  return "paper";
}else{
  return"scissors";
}
}


//Human choice
function getHumanChoice(){
  let choice = prompt("Enter your choice:");
  return choice
}


function playRound(computerChoice, humanChoice){
  if( computerChoice === humanChoice ) {
            alert(`It's Tie, both of you choose ${computerChoice}`)
        }else if(computerChoice === "rock" && humanChoice === "paper" || computerChoice === "scissors" && humanChoice === "rock" ||
          computerChoice === "paper" && humanChoice === "scissors"
        ){
          humanScore++;
          alert(`You won, ${humanChoice} beats ${computerChoice}`)
        }else if(humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "rock" ||
          humanChoice === "paper" && computerChoice === "scissors"
        ){
          computerScore++;
          alert(`You lose, ${computerChoice} beats ${humanChoice}`)
        }
}
for(i=1; i<= 5; i++){
  const humanChoice = getHumanChoice()
  const computerChoice = getComputerChoice()
  playRound(humanChoice, computerChoice)
  alert(`Round ${i},HumanScore: ${humanScore} and computerScore: ${computerScore}`)
}
if(humanScore > computerScore) {
  alert(`Congratulation! You won with ${humanScore} Round`)
}else if(computerScore > humanScore) {
  alert(`Sorry! You lose with ${computerScore} computer's Round`)
}else{
  alert("The game is a tie! Well played!")
}
}
playGame()