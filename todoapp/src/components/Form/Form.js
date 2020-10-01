import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTodo(this.state) //in class components, we implicitly have access to the props
        this.setState({ content: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:
                        <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                    </label>
                </form>
            </div>
        )
    }
}
