/* jshint browser: true */

var robotInit = 0;
var guess = document.getElementById('submitGuess');
var correctWord = document.getElementById('goodGuess');
var wordList = ["apple", "puppy", "cat", "computer", "function"];

var word = wordList[Math.floor(Math.random() * wordList.length)]; //chooses a random word from wordList
var guessedLetters = [];
var missedLetters = [];
var updatedWord = [];

//Sets the game
var gameBoard = function() {

  //Adds underscores for each letter.
  for(var i = 0; i < word.length; i++) {
    updatedWord.push("_");
  }
  correctWord.innerHTML = updatedWord.join(" ");
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
        document.getElementById('robotCounter').innerHTML = robotInit;
        guessedLetters.push(newLetter);
        missedLetters.push(newLetter);
      }
      if (robotInit === 5) {
        alert("Game over!");
      }
      if (updatedWord.join("") === word) {
        alert("Yay you win!");
        resetGame();
      }
    }
  }
  document.getElementById('yourGuess').value = "";
  document.getElementById('badGuess').innerHTML = missedLetters.toString();

};

gameBoard();
guess.addEventListener('click', newGuess, true);
