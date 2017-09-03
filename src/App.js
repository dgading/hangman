import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameActive: false,
      gameOver: false,
      gameWon: false,
      gameWord: ['t', 'e', 's', 't'],
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z'],
      guessedLetters: [],
      failedGuesses: 0,
      errorMessage: 'Random Error Message'
    }
  }

  setWord = () => {
    this.setState({
      gameActive: true
    })
  }

  resetGame = () => {
    this.setState({
      gameActive: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's Play Hangman</h2>
        </div>
        <p className="App-intro">
          To get started, click the button below
        </p>
        <p>{this.state.errorMessage}</p>
        <div>
          <div>Fail 1 - HEAD</div>
          <div>Fail 2 - BODY</div>
          <div>Fail 3 - LEFT ARM</div>
          <div>Fail 4 - RIGHT ARM</div>
          <div>Fail 5 - LEFT LEG</div>
          <div>Fail 6 - RIGHT LEG</div>
          <p>You Lost</p>
          <p>You Won</p>
          <button>Play Again?</button>
        </div>
        <div>
          {this.state.gameWord.map((letter, index) =>
            <span className="letter-placeholder" key={index}>_ </span>
          )}
        </div>
        <form onSubmit={this.guessLetter}>
          <label>Enter letter: </label>
          <input type='text' value={this.state.letterInput} onChange={this.handleLetterInput} />
          <button type='submit'>Guess</button>
        </form>
        <div>
          <ul>
            {this.state.letters.map((letter, index) =>
              <li key={index}>{letter}</li>
            )}
          </ul>
        </div>
        <button onClick={this.setWord}>Start Game</button>
        <button onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }
}

export default App;
