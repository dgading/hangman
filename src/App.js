import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';

import BlankLetter from './components/BlankLetter';
import Button from './components/Button';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      guessedLetters: []
    }
  }

  setWord(word) {
    this.setState({
      letters: word.split('')
    })
  }

  componentDidMount() {
    axios.get('http://setgetgo.com/randomword/get.php')
      .then(function(response){
        console.log(response.data);
        this.setWord(response.data);
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      });
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
        <Button text="Start Game" />
        <div>
          {this.state.letters.map((letter, index) =>
            <BlankLetter 
            letter={letter}
            key={index}>
          </BlankLetter>
          )}
        </div>
      </div>
    );
  }
}

export default App;
