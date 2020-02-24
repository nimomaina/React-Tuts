import React, {Component} from 'react';
import Todos from './Todo';
import AddTodo from './AddTodo';
import './style.css';
class App extends Component{
  state = {
    todos: [
      {id:1, task:"Cook"},
      {id:2, task:"Watch sistas"}
    ]
  }

  //delete a todo by filtering through the todos arrow in state
  //no mutation, filter and store in new array
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos:todos
    })
  }
//add the todo item
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }

  render(){
    return (
      <div className="App container center card-panel hoverable ">
        <h1 className="center teal-text">My Todos</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}  />
        <AddTodo addTodo = {this.addTodo} />
      </div>
    )
  }
}
export default App;
