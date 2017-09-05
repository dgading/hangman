import { combineReducers } from 'redux';
import { START_GAME, GUESS_WRONG } from '../actions'

const initialState = {
  gameActive: false
}

const initialGuesses = {
  remainingGuesses: 6,
  guessedLetters: []
}

function gameState(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return Object.assign({}, state, {
        gameActive: true,
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