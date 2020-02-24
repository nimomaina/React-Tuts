import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.task}</span>
          <span className="badge red " data-badge-caption="Delete task" onClick={() => deleteTodo(todo.id)}>
          </span>
        </div>
      )
    })
  ) : (<p>No ToDo's for the day. Nap Nap</p>)
  return (
    <div className="todos-list collection">
      {todoList}
    </div>
  )
}
export default Todos