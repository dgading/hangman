import { combineReducers } from 'redux';
import gameState from './gameState';

const hangmanApp = combineReducers({
  gameState
})

export default hangmanApp;