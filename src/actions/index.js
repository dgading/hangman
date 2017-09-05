export const START_GAME = 'START_GAME';
export const GUESS_WRONG = 'GUESS_WRONG';


export function startGame(bool) {
  return { type: START_GAME, bool }
}

export function guessWrong(letter) {
  return { type: GUESS_WRONG, letter }
}

