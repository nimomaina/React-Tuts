import React, { Component } from 'react';
import Tutorial from './ninjas';

//container component.
//has its own state
class App extends Component {
  state = {
    ninjas: [
      {name:"Nimo Maina", age:"30", company:"Jenga", id:1},
      {name:"Nim", age:"30", company:"Jenga", id:2}
  ]
}
render() {
  return (
    <div className="App">
      <h1>Nesting Components tutorial</h1>
      <Tutorial ninjas = {this.state.ninjas}/>
    </div>
  );
}
}

export default App;
