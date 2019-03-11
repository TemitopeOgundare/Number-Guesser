/*
GAME FUNCTION
-player must guess a number bwtween a min and max
-player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if lose
-Let player choose to play again

*/

//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event Listener
game.addEventListener('mousedown', function(e){
 if(e.target.className === 'play-again') {
   window.location.reload(); 
 }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
 let guess = parseInt(guessInput.value);

 // Validate
 if(isNaN(guess) || guess < min || guess > max) {
   setMessage(`Please enter a number between ${min} and ${max}`, 'red');
 } 

 // check if won 

 if(guess === winningNum){
   gameOver(true, `${winningNum} is correct, YOU WIN`);
 } else {
   // Wrong NUmber
   guessesLeft -= 1;

   if (guessesLeft === 0) {
     //GAme Over - Lost

     
     gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
   } else {
    //Change Border color

    guessInput.style.borderColor = 'red';
     // Clear Input 
     guessInput.value = "";

     // Tell user its wrong number

     setMessage(`${guess} is not correct, ${guessesLeft} guesses Left`, 'red');

    

   }
 }

});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //Disable Input
  guessInput.disabled = true;
  //Change Border color
  guessInput.style.borderColor = 'color';
  // SEt Message Color
  message.style.color = color;
  //set message
  setMessage(msg);

  // PLay Again ?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}
function getRandomNum(min, max){
  return Math.floor(Math.random()* (max-min+1)+min);
}
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg; 
};

