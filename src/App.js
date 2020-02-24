import React, { Component } from 'react';
import Tutorial from './ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nesting Components tutorial</h1>
        <Tutorial name="Nimo Maina" age="30" company="Jenga" />
        <Tutorial name="Nimz" age="30" company="Jenga" />

      </div>
    );
  }
}

export default App;
