import { connect } from 'react-redux';
import { startGame } from '../actions';

import GameButtons from '../components/GameButtons';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.gameActive
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => {
      dispatch(startGame(ownProps.filter))
    }
  }
}

const GameManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameButtons);

export default GameManager;