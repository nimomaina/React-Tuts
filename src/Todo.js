import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  //create a todolist variable which will have all the todos from the map function
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className="left-align">{todo.task}</span>
          <span className="badge red" data-badge-caption="Delete task" onClick={() => deleteTodo(todo.id)}>
          </span>
        </div>
      )
    })
  ) : (<p>No Task for the day. Nap! Nap!!</p>)
  return (
    <div className="todos-list collection">
      {todoList}
    </div>
  )
}
export default Todos