import React, { Component } from 'react';
import './App.css';
import {Login, Register} from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello im a react app </h1> 
        < Login />
        < Register />
      </div>
    );
  }
}

export default App;
