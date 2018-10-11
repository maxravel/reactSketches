import React, { Component } from 'react';
import Newcomp from './newComp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nauka REACTa!</h1>
        <p>Witajcie Pryjaciele!</p>
        <Newcomp />
      </div>
    );
  }
}

export default App;
