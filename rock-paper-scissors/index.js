function game() {

   let playerScore = 0;
   let pcScore = 0;
   let moves = 0;

   let rock = document.querySelector('.rock');
   let paper = document.querySelector('.paper');
   let scissors = document.querySelector('.scissors');
   let roundWinner = document.querySelector('.result-container');
   let gameWinner = document.querySelector(".game-winner-container");
   let pcRounds = document.querySelector('.pc-score p');
   let playerRounds = document.querySelector('.player-score p');
   let movesText = document.querySelector(".moves");

   function displayPlayAgainButton() {
      let playAgainBtn = document.createElement("button");
      gameWinner.appendChild(playAgainBtn);
      playAgainBtn.innerText = "Play Again";
      playAgainBtn.classList.add("play-again-btn");
      playAgainBtn.addEventListener("click", (e) => {
         location.reload();
      }, false)
   }

   function playGame() {

      let playerOptions = [rock, paper, scissors];
      console.log(playerOptions);

      playerOptions.forEach(option => {

         option.addEventListener('click', function (e) {

            let computerChoice = getPcChoice();
            let playerChoice = ""
            console.log(e.target);

            if (e.target.className === "rock option-image") {
               playerChoice = "rock"
            }

            if (e.target.className === "scissors option-image") {
               playerChoice = "scissors"
            }

            if (e.target.className === "paper option-image") {
               playerChoice = "paper"
            }
            console.log(computerChoice, playerChoice);

            const winner = getRoundWinner(computerChoice, playerChoice);
            roundWinner.innerText = winner;

            if (winner == 'PC') {
               pcScore++;

            } else if (winner == 'Player') {
               playerScore++;
            }

            moves++;
            movesText.innerText = `Moves: ${moves}`;

            console.log(winner);
            console.log(pcScore, playerScore);
            playerRounds.innerText = `Score Player: ${playerScore}`;
            pcRounds.innerText = `Score Computer: ${pcScore}`;

            if (playerScore === 5) {
               gameWinner.innerText = "Player Won the Game!"
            } else if (pcScore == 5) {
               gameWinner.innerText = "Computer Won the Game!"
            }

            if (playerScore == 5 || pcScore == 5) {

               rock.classList.add("disabled")
               scissors.classList.add("disabled")
               paper.classList.add("disabled")

               displayPlayAgainButton();
            }
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




