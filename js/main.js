var robotInit = 0;
var guess = document.getElementById('submitGuess');
var word = "apple".split("");

console.log(word);
var newGuess = function() {
  var newLetter = document.getElementById('yourGuess').value;
  if (newLetter.length == 0) {
    alert("You gotta add a letter!");
  } else if (newLetter.length > 0) {
    for (var i = 0; i < word.length; i++) {
      // compare newLetter to each indice in the word
      console.log(word[i]);
      if (newLetter == word[i]) {
        document.getElementById('goodGuess').innerHTML += newLetter;
      } else {
        document.getElementById('badGuess').innerHTML += newLetter;

      }
    }

  } else {
    robotInit++;
    document.getElementById('robotCounter').innerHTML = robotInit;
    if(robotInit == 5) {
      alert("Game over!");
    }
  }
  document.getElementById('yourGuess').value = "";
  console.log(word[3]);
};

guess.addEventListener('click', newGuess, true);
