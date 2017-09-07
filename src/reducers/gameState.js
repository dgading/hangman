export const initialGameState = {
  gameActive: false,
  gameWon: false,
  gameLost: false,
  remainingGuesses: 6,
  guessedLetter: [],
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z'],
}

function gameState(state = [], action) {
  switch (action.type) {
    case 'START_GAME':
      let targetWord = 'test';
      return Object.assign({}, state, {
        gameActive: action.bool,
        targetWord: Array.from(targetWord),
        correctGuesses: Array.from('_'.repeat(targetWord.length))
      })
    case 'GUESS_LETTER':
      console.log(action.letter)
      return Object.assign({}, state, {
        ...state,
        guessedLetter: state.guessedLetter.concat(action.letter)
      })
    default:
      return state;
  }
}

export default gameState;