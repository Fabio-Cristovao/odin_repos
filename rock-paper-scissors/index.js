
const roundWinner = gameRound();
let userWinCounter = 0;
let pcWinCounter = 0;
while (userWinCounter < 5 || pcWinCounter < 5) {
   game(roundWinner)
}
function game(roundWinner) {


   if (roundWinner === "user") {
      userWinCounter++;
   } else if (roundWinner === "pc") {
      pcWinCounter++;
   }

   return (console.log(userWinCounter, pcWinCounter));

}

game(roundWinner);

function gameRound(computerChoice, userChoice) {

   console.log(computerChoice);
   console.log(userChoice)

   let roundWinner;

   if (computerChoice === userChoice) {
      result = "It's a tie!"
   } else if (computerChoice === 'Rock' && userChoice === "Scissors") {
      result = "Pc wins!"
   } else if (computerChoice === 'Rock' && userChoice === "Paper") {
      result = "You win!"
   } else if (computerChoice === 'Paper' && userChoice === "Scissors") {
      result = "You win!"
   } else if (computerChoice === 'Paper' && userChoice === "Rock") {
      result = "Pc win!"
   } else if (computerChoice === 'Scissors' && userChoice === "Paper") {
      result = "Pc win!"
   } else if (computerChoice === 'Scissors' && userChoice === "Rock") {
      result = "You win!"
   }

   if (result === "You win!") {
      roundWinner = "user";
   } else if (result === "Pc wins!") {
      roundWinner = "pc";
   } else if (result === "It's a tie!") {
      roundWinner = "tie";
   }

   return console.log(roundWinner);
}

const userPlay = userChoice();
const pcPlay = computerChoice();

gameRound(pcPlay, userPlay)

function computerChoice() {
   // genarate a random number to assign th options too

   let randomNum = Math.floor(Math.random() * 3);
   //console.log(randomNum);

   let pcWeapon;

   switch (randomNum) {
      case 0:
         pcWeapon = 'Rock'
         break;
      case 1:
         pcWeapon = 'Paper'
         break;
      case 2:
         pcWeapon = 'Scissors'
         break;
      default:
         break;
   }

   //console.log(pcWeapon)
   return pcWeapon
}

function userChoice() {
   let userInput = prompt('Choose you weapon:').toLowerCase();
   //console.log(userInput)
   let userWeapon;

   switch (userInput) {
      case 'rock':
         userWeapon = 'Rock'
         break;
      case 'paper':
         userWeapon = 'Paper'
         break;
      case 'scissors':
         userWeapon = 'Scissors'
         break;
      default: console.log('Please choose of the options: rock. paper, or scissors ')
         break;
   }
   return userWeapon
}


