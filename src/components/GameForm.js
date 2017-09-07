import React from 'react';
import LetterSelector from './LetterSelector';

const GameForm = ({...gameState, onGuessLetter}) => {
  return(
    <div>
      <form>
        <label>Guess a letter</label>
        {gameState.letters.map((letter, index) => (
          <LetterSelector 
            key={index} 
            letter={letter} 
            index={index} 
            onClick={() => onGuessLetter(letter)}/>
        ))}
      </form>
    </div>
  )
}

export default GameForm;