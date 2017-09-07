import React from 'react';
import LetterSpace from './LetterSpace';

const GameDisplay = ({correctGuesses}) => {
  return(
    <div>
      
      {correctGuesses.map((correctGuess, index) => (
        <LetterSpace key={index} />
      ))}
    </div>
  )
}

export default GameDisplay;