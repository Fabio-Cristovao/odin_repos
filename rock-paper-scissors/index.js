function game() {

   let playerScore = 0;
   let pcScore = 0;
   let moves = 0;

   let rock = document.querySelector('.rock');
   let paper = document.querySelector('.paper');
   let scissors = document.querySelector('.scissors');

   function playGame() {

      let playerOptions = [rock, paper, scissors];
      console.log(playerOptions);

      playerOptions.forEach(option => {
         option.addEventListener('click', function (e) {

            const computerChoice = getPcChoice();
            const playerChoice = e.target.className;
            console.log(computerChoice, playerChoice);

            const winner = getRoundWinner(computerChoice, playerChoice);
            console.log(winner);
         }, false)
      })

      function getPcChoice() {
         let pcOptions = ['rock', 'paper', 'scissors'];
         const randomOption = Math.floor(Math.random() * 3);
         const pcChoice = pcOptions[randomOption];
         return pcChoice;
      }

      function getRoundWinner(pc, player) {
         let result;

         if (pc == player) {
            result = 'Draw!'
         } else if (pc == 'rock' && player == 'scissors') {
            result = 'PC Wins!';
         } else if (pc == 'scissors' && player == 'paper') {
            result = 'PC Wins!';
         } else if (pc == 'paper' && player == 'rock') {
            result = 'PC Wins!';
         } else {
            result = 'Player Wins!'
         }

         return result;

      }
   }

   playGame();



}

game();




