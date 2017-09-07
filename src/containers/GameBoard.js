import { connect } from 'react-redux';

import GameForm from '../components/GameForm';

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const GameBoard = connect(mapStateToProps, mapDispatchToProps)(GameForm);

export default GameBoard;
