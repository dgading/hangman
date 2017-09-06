import { combineReducers } from 'redux';
import { TOGGLE_GAME_STATUS, GUESS_WRONG } from '../actions'

const initialState = {
  gameActive: false,
  gameWon: false,
  gameLost: false
}

const initialGuesses = {
  remainingGuesses: 6,
  guessedLetters: []
}

function gameState(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GAME_STATUS:
      return Object.assign({}, state, {
        gameActive: action.bool
      })
    default:
      return state;
  }
}

function guessState(state = initialGuesses, action) {
  switch (action.type) {
    case GUESS_WRONG:
      return {
        remainingGuesses: state.remainingGuesses - 1,
        guessedLetters: state.guessedLetters.concat(action.letter)
      };
    default:
      return state;
  }
}

const hangmanApp = combineReducers({
  gameState,
  guessState
})

export default hangmanApp;