/* jshint browser: true */

var robotInit = 0;
var guess = document.getElementById('submitGuess');
var correctWord = document.getElementById('goodGuess');
var wordList = ["apple", "puppy", "cat", "computer", "function", "word", "javascript", "infographic", "player", "wordpress", "robot", "pasword", "money"];

var word; //chooses a random word from wordList
var guessedLetters = [];
var missedLetters = [];
var updatedWord = [];
var remainingAttempts = 5;

//Sets the game
var gameBoard = function() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  //Adds underscores for each letter.
  for(var i = 0; i < word.length; i++) {
    updatedWord.push("_");
  }
  correctWord.innerHTML = updatedWord.join(" ");
  document.getElementById('attemptsLeft').innerHTML = remainingAttempts;
};

//Resets game after win
var resetGame = function() {
  while (correctWord.firstChild) {
    correctWord.removeChild(correctWord.firstChild);
  }
  guessedLetters = [];
  missedLetters = [];
  updatedWord = [];
  robotInit = 0;
  remainingAttempts = 5;
  gameBoard();
};



// Guessing Logic
var newGuess = function() {
  var yourGuess = false;
  var newLetter = document.getElementById('yourGuess').value;

  //console.log(newLetter);
  if (newLetter.length === 0) { //returns alert if input is empty
    alert("You gotta add a letter!");
  } else {
    //console.log(guessedLetters.indexOf(newLetter));
    if (guessedLetters.indexOf(newLetter) >= 0) { // returns alert if letter has been guessed already
        alert("You've already guessed that letter!");
    } else {
      guessedLetters.push(newLetter);
      for (var i = 0; i < word.length; i++) { //compares guess to each letter in word
        if (newLetter === word[i]) {
          //find index of letter
          updatedWord.splice(i, 1, newLetter);
          //console.log(guessedLetters);
          yourGuess = true;
        }
      }
      console.log(updatedWord.join(""));
      document.getElementById('goodGuess').innerHTML = updatedWord.join(" ");
      if (yourGuess === false) {
        robotInit++;
        document.getElementById('attemptsLeft').innerHTML = remainingAttempts - robotInit;
        guessedLetters.push(newLetter);
        missedLetters.push(newLetter);
        //adds robot
        if (robotInit === 1) {
          document.getElementById("robotLegs").className = "aboveground";
        } else if (robotInit === 2) {
          document.getElementById("robotBody").className = "aboveground";
        } else if (robotInit === 3) {
          document.getElementById("robotArms").className = "aboveground";
        } else if (robotInit === 4) {
          document.getElementById("robotHead").className = "aboveground";
          document.getElementById("robotWarning").className = "aboveground";
        }
      }

      if (robotInit === 5) {
        alert("OH NO! The robot is active and destroying the city!");
        resetGame();
      }
      if (updatedWord.join("") === word) {
        alert("That was close, thanks for deactivating the robot!");
        resetGame();
      }
    }
  }
  document.getElementById('yourGuess').value = "";
  document.getElementById('badGuess').innerHTML = missedLetters.toString();

};

gameBoard();
guess.addEventListener('click', newGuess, true);
