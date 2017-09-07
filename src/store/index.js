import { createStore } from 'redux';
import hangmanApp from '../reducers';
import { initialGameState as gameState } from '../reducers/gameState';


const defaultState = {
  gameState,
}

const store = createStore(hangmanApp, defaultState);

export default store;