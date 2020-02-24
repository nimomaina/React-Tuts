import React, {Component} from 'react';
import Todos from './Todo';
class App extends Component{
  state = {
    todos: [
      {id:1, task:"cook"},
      {id:2, task:"watch sistas"}
    ]
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos:todos
    })
  }
  render(){
    return (
      <div className="App container center card-panel hoverable ">
        <h1 className="center teal-text">My Todos</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    )
  }
}
export default App;
