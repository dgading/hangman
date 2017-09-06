export const TOGGLE_GAME_STATUS = 'TOGGLE_GAME_STATUS';
export const GUESS_WRONG = 'GUESS_WRONG';


export function toggleGameActive(bool) {
  console.log('blah')
  return { 
    type: TOGGLE_GAME_STATUS, 
    bool 
  }
}

export function guessWrong(letter) {
  return { type: GUESS_WRONG, letter }
}

