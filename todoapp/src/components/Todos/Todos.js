import React from 'react'

export default function Todos({ todos, deleteTodo }) {
    const todoList = todos.length ? todos.map((todo, i) => {
        return <div className="collection-item" key={todo.id}>
            <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
    }) : (
            <p className="center">You have nothing left to do!</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
