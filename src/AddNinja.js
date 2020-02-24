import React, { Component } from "react"

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    company: null,
  }
  // ths handles the change events when we input anything in the form
  //use th eid to get the value because the state names are exactly the same as the ids
  //set the state/ alter whenever we type anything in the input 
  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  //this is what happens when press the submit button
  //we take the function from the parent class Tutorial as a props
  //we pass in the state that we have updated above with handleChange function
//always preventDefault if we dont want the page to reload each time we submit our form
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addNinja(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default AddNinja