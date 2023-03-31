function game() {

   let playerScore = 0;
   let pcScore = 0;
   let moves = 0;

   let rock = document.querySelector('.rock');
   let paper = document.querySelector('.paper');
   let scissors = document.querySelector('.scissors');
   let roundWinner = document.querySelector('.result');
   let pcRounds = document.querySelector('.pc-score');
   let playerRounds = document.querySelector('.player-score');

   function playGame() {

      let playerOptions = [rock, paper, scissors];
      console.log(playerOptions);

      playerOptions.forEach(option => {

         option.addEventListener('click', function (e) {

            let computerChoice = getPcChoice();
            let playerChoice = e.target.className;
            console.log(computerChoice, playerChoice);

            const winner = getRoundWinner(computerChoice, playerChoice);
            roundWinner.innerText = winner;

            if (winner == 'PC') {
               pcScore++;

            } else if (winner == 'Player') {
               playerScore++;
            }

            console.log(winner);
            console.log(pcScore, playerScore);
            playerRounds.innerText = `Score Player: ${playerScore}`;
            pcRounds.innerText = `Score Computer: ${pcScore}`;
            moves++;


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
            result = 'PC';
         } else if (pc == 'scissors' && player == 'paper') {
            result = 'PC';
         } else if (pc == 'paper' && player == 'rock') {
            result = 'PC';
         } else {
            result = 'Player';
         }

         return result;

      }
   }

   playGame();



}

game();




