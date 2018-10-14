import React, { Component } from 'react';
import Newcomp from './newComp.js';

class App extends Component {
  state = { 
    content:[
      {type:"movie", gene:"comedy",name:"ALF", id:1},
      {type:"music album", gene:"rock",name:"Foxtrot", id:2},
      {type:"book", gene:"fantasy",name:"Harry Potter", id:3}
    ]
  }
  render() {    
    return (
      <div className="App">
        <h1>Nauka REACTa!</h1>
        <p>Witajcie Pryjaciele!</p>
        {/* <Newcomp type="movie" gene="comedy" name="Alf"/> */}
        {/* <Newcomp type="music album" gene="rock" name="Foxtrot"/> */}
        <Newcomp content={this.state.content}/>
      </div>
    );
  }
}

export default App;
