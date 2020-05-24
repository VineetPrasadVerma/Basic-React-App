import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class Main extends Component {
  state = {
    todos: [
      {id:1, content:'Shopping'},
      {id:2, content:'Travelling'},
    ]
  }

  deleteTodo = (id) => {
    this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random()
    this.setState({
        todos: [...this.state.todos, newTodo]
    })
  } 

  render () {
    return (
      <div className="todo-Main container">
        <h1 className="center blue-text">TODO'S</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    )
  }
}

export default Main
