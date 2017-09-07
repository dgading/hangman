export function startGame(bool) {
  return { 
    type: 'START_GAME', 
    bool 
  }
}

export function guessLetter(letter) {
  return {
    type: 'GUESS_LETTER',
    letter
  }
}

