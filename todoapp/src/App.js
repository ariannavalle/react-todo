import React, { Component } from 'react'
import Todos from './components/Todos/Todos'
import Form from './components/Form/Form'

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "do some homework" },
      { id: 2, content: "play mario kart" },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random()
    let todos = [...this.state.todos, newTodo]

    this.setState({
      todos //set todos state to equal new todos (todos: todos) 
    })


  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Form addTodo={this.addTodo} />
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    )
  }
}
