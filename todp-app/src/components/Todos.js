import React from 'react'

const todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id} className='collection-item'>
          <span onClick={() => deleteTodo(todo.id)}> {todo.content} </span>
        </div>
      )
    })
  ) : (
    <p className='center'> You have no todo's left! </p>
  )

  return (
    <div className='todos collection'>
      {todoList}
    </div>
  )
}

export default todos
