import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    task: ''
  }
  handleChange = (evt) => {
    this.setState({
      task: evt.target.value
    })
  }

  //what happens when you click on submit button
  //we want to add a todo
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addTodo(this.state)
    //reset the value of input for it to clear and we get space to add our next to do
    this.setState({
      task:''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add your TODO" onChange={this.handleChange} value={this.state.task}/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default AddTodo