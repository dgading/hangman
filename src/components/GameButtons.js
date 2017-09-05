import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const GameButtons = ({ onButtonClick }) => (
  <div>
    <Button filter="START_GAME" text={'Start Game'} onClick={() => onButtonClick()} />
    <Button filter="RESET_GAME" text={'Reset Game'} onClick={() => onButtonClick()} />
  </div>
);

GameButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default GameButtons;
