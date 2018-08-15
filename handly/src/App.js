import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello im a react app </h1> 
        < Login />
      </div>
    );
  }
}

export default App;
