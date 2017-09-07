import React from 'react';

const LetterSelector = ({letter, index, onClick}) => {
  return(
    <div>
      <input 
        type='radio' 
        id={letter + '_' + index} 
        value={letter}
        onClick={onClick}
      />
      <label htmlFor={letter + '_' + index}>{letter}</label>
    </div>
  )
}

export default LetterSelector;
