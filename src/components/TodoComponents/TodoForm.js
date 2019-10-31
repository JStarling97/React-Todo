import React, { Component } from 'react';


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            taskName: ""
        };
    }


    handleChanges = e => {
    this.setState({
        taskName: e.target.value
    });
    };

    handleSubmit = e => {
    e.preventDefault();
    if(this.state.taskName !== "") {
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ""
        });
    }
    };

    render() {
    console.log("Rendering Form");
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
                onChange={this.handleChanges}
                type="text"
                name="task"
                value={this.state.taskName}
            />
            <button type="submit">Add Task</button>
        </form>
    );
    };

}
export default TodoForm