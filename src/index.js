import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { startGame, guessWrong } from './actions';

import hangmanApp from './reducers';

import './index.css';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(hangmanApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

console.log(store.getState());
let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

store.dispatch(startGame(true));
store.dispatch(guessWrong('t'));
store.dispatch(guessWrong('f'))

unsubscribe();
