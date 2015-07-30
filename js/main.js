var robotInit = 0;
var guess = document.getElementById('submitGuess');
var word = "puppy";
var guessedLetters = [];
var missedLetters = [];


// console.log(word);
var newGuess = function() {
  var yourGuess = false;
  var newLetter = document.getElementById('yourGuess').value;
  console.log(newLetter);
  if (newLetter.length == 0) {
    alert("You gotta add a letter!");
  } else {
    console.log(guessedLetters.indexOf(newLetter));
    if (guessedLetters.indexOf(newLetter) >= 0) {
        alert("You've already guessed that letter!");
    } else {
      guessedLetters.push(newLetter);
      for (var i = 0; i < word.length; i++) { //compares guess to each letter in word
        if (newLetter === word[i]) {
          document.getElementById('goodGuess').innerHTML += word[i];
          console.log(guessedLetters);
          yourGuess = true;
        }
      }
        if (yourGuess === false) {
          robotInit++;
          document.getElementById('robotCounter').innerHTML = robotInit;
          guessedLetters.push(newLetter);
          missedLetters.push(newLetter);
        }
        if(robotInit == 5) {
          alert("Game over!");
        }
      }
    }
  document.getElementById('yourGuess').value = "";
  document.getElementById('badGuess').innerHTML = missedLetters.toString();

};

guess.addEventListener('click', newGuess, true);
