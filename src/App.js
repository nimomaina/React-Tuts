import React, { Component } from 'react';
import Tutorial from './ninjas';
import AddNinja from './AddNinja';

//container component.
//has its own state
class App extends Component {
  state = {
    ninjas: [
      { name: "Nimo Maina", age: "30", company: "Jenga", id: 1 },
      { name: "Nimz", age: "15", company: "Kwara", id: 2 },
      { name: "Nim", age: "25", company: "Jenga", id: 3 }
    ]
  }
//this is the function we using as props to pass to the child component AddNinja
// we generate an id to the ninja array passed in here using math.random to get random integrs as ID
// we never want to change the original array
//we use the spread operator to get all the properties of the original array and add the ones we have
//it will spread over the index and values
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Nesting Components tutorial</h1>
        <Tutorial ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
