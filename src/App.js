import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      guessedLetters: []
    }
  }

  setWord(word) {
    this.setState({
      word: word
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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
