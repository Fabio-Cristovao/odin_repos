

function gameRound(pcPlay, userPlay) {

   /* console.log(pcPlay);
   console.log(userPlay) */

   //let roundWinner;

   if (pcPlay === userPlay) {
      result = "It's a tie!"
   } else if (pcPlay === 'Rock' && userPlay === "Scissors") {
      result = "Pc wins!"
   } else if (pcPlay === 'Rock' && userPlay === "Paper") {
      result = "You win!"
   } else if (pcPlay === 'Paper' && userPlay === "Scissors") {
      result = "You win!"
   } else if (pcPlay === 'Paper' && userPlay === "Rock") {
      result = "Pc win!"
   } else if (pcPlay === 'Scissors' && userPlay === "Paper") {
      result = "Pc win!"
   } else if (pcPlay === 'Scissors' && userPlay === "Rock") {
      result = "You win!"
   }

   /* if (result === "You win!") {
      roundWinner = "user";
   } else if (result === "Pc wins!") {
      roundWinner = "pc";
   } else if (result === "It's a tie!") {
      roundWinner = "tie";
   } */

   return result
}

const userPlay = userChoice();
const pcPlay = computerChoice();

//console.log(gameRound(pcPlay, userPlay))


const roundWinner = gameRound(pcPlay, userPlay);

console.log(roundWinner)



function game(roundWinner) {
   console.log(roundWinner)

   let userWinCounter = 0;
   let pcWinCounter = 0;

   if (roundWinner === "user") {
      console.log('user wins')
   } else if (roundWinner === 'pc') {
      console.log('pc wins')
   }
};

game(roundWinner);


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


