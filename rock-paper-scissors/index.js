
let userWinCounter = 0;
let pcWinCounter = 0;

for (let index = 1; index < 6; index++) {

   const userPlay = userChoice();
   const pcPlay = computerChoice();

   let roundWinner = gameRound(pcPlay, userPlay);

   if (roundWinner === "You win!") {
      userWinCounter++;
   } else if (roundWinner === "Pc wins!") {
      pcWinCounter++
   } else {
      userWinCounter;
      pcWinCounter;
   }
   console.log(`${index} round. Result: ${userWinCounter} vs ${pcWinCounter}`)
};

let winner;

if (userWinCounter > pcWinCounter) {
   winner = "The winner is the user"
} else {
   winner = "The winner is the pc!"
}

console.log(winner)

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

function gameRound(pcPlay, userPlay) {

   let result

   if (pcPlay === userPlay) {
      result = "It's a tie!"
   } else if (pcPlay === 'Rock' && userPlay === "Scissors") {
      result = "Pc wins!"
   } else if (pcPlay === 'Rock' && userPlay === "Paper") {
      result = "You win!"
   } else if (pcPlay === 'Paper' && userPlay === "Scissors") {
      result = "You win!"
   } else if (pcPlay === 'Paper' && userPlay === "Rock") {
      result = "Pc wins!"
   } else if (pcPlay === 'Scissors' && userPlay === "Paper") {
      result = "Pc wins!"
   } else if (pcPlay === 'Scissors' && userPlay === "Rock") {
      result = "You win!"
   }

   return result
}
