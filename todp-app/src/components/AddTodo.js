import React, { Component } from 'react'

class AddTodo extends Component{
  state = {
    content:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault() 
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <label>Add New Todo:</label>
          <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo