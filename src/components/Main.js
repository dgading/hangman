import React from 'react';

import Button from './Button';
import GameDisplay from './GameDisplay'
import GameForm from './GameForm';

const Main = ({gameState, onStartGame, onGuessLetter}) => {
  let gameButton = null;
  if (!gameState.gameActive) {
    gameButton = <Button text={'Start Game'} onClick={() => onStartGame(true)} />
  }
  return (
    <div>
      <h1>Let's Play Hangman</h1>
      {gameState.gameActive === true &&
        <div>
          <GameDisplay correctGuesses={gameState.correctGuesses}/>
          <GameForm {...gameState} onGuessLetter={onGuessLetter}/>

          {gameState.guessedLetters &&
            gameState.guessedLetters
          }
        </div>
      }
      {gameButton}
    </div>
  )
}

export default Main;