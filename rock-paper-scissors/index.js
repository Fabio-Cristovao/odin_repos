function gameRound(computerChoice, userChoice) {
   console.log(computerChoice);
   console.log(userChoice)

   let result;

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

   return console.log(result);
}
function computerChoice() {

   // genarate a random number to assign th options too

   let randomNum = Math.floor(Math.random() * 3);
   console.log(randomNum);

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

   console.log(pcWeapon)
   return pcWeapon
}

function userChoice() {
   userInput = prompt('Choose you weapon:').toLowerCase();
   console.log(userInput)

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

const userPlay = userChoice()
const pcPlay = computerChoice()

console.log(gameRound(pcPlay, userPlay));




/* function game(computerChoice, userChoice) {
} */


