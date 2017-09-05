import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';

import BlankLetter from './components/BlankLetter';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameActive: false,
      letters: [],
      guessedLetters: [],
      errorMessage: ''
    }
    this.setWord = this.setWord.bind(this);
  }

  setWord = () => {
    console.log('kfkfe');
    axios.get('http://setgetgo.com/randomword/get.php')
      .then(function(response){
        console.log(response.data);
        this.setState({
          letters: response.data.split(''),
          gameActive: true
        })
      }.bind(this))
      .catch(function(error) {
        console.log(error);
    });
  }

  resetGame = () => {
    this.setState({
      letters: [],
      gameActive: false
    })
  }

  handleLetterInput = (e) => {
    this.setState({currentLetter: e.target.value})
  }

  guessLetter = (e) => {
    e.preventDefault();
    this.setState({errorMessage: ''});
    if (this.state.currentLetter === '') {
      return this.setState({errorMessage: 'Please guess a letter'});
    }
    if(this.state.letters.includes(this.state.currentLetter)) {
      var foo = this.state.currentLetter;
      this.state.letters.reduce(function (a, e, i) {
        if(e === foo) {
          a.push(i);
        }
        console.log(a);
        return a;
      }, []);
      this.setState({
        guessedLetters: this.state.guessedLetters.concat(this.state.currentLetter),
        currentLetter: ''
      });
    }

    if (!this.state.guessedLetters.includes(this.state.currentLetter)) {
      this.setState({
        guessedLetters: this.state.guessedLetters.concat(this.state.currentLetter),
        currentLetter: ''
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, click the button below
        </p>
        <p>{this.state.errorMessage}</p>
        { this.state.gameActive === false &&
          <button onClick={this.setWord}>Start Game</button>
        }
        { this.state.gameActive === true &&
          <div>
            {this.state.letters.map((letter, index) =>
              <BlankLetter 
              letter={letter}
              key={index}>
            </BlankLetter>
            )}
            <form onSubmit={this.guessLetter}>
              <label>Guess a letter</label>
              <input type='text' value={this.state.letterInput} onChange={this.handleLetterInput} />
              <button type='submit'>Guess</button>
            </form>
            <button onClick={this.resetGame}>Reset Game</button>
          </div>
        }
        
      </div>
    );
  }
}

export default App;
