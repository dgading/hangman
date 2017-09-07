import { connect } from 'react-redux';
import { startGame, guessLetter } from '../actions';

import Main from '../components/Main';

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStartGame: bool => {
      dispatch(startGame(bool))
    },
    onGuessLetter: letter => {
      dispatch(guessLetter(letter))
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;