import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ active, onClick, text }) => {
  // if(!active) {
  //   return null;
  // }

  return(
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {text}
    </button>
  )
};

Button.propTypes = {
  //active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired
}

export default Button;