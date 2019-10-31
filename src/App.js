import React, { Component } from 'react';
import todoObject from './Objects/Object';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      task: todoObject,
      otherState: "The Other State"
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(itemId) {
    console.log("toggleDone: ", itemId);
  
  this.setState({
    task: this.state.task.map(item => {
      if(item.id === itemId) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item;
    })
  })
}

 clearDone = () => {
  console.log("clearDone");
  this.setState({
    task: this.state.task.filter(item => {
      return !item.done;
    })
  })
}

addTask = taskName => {
  console.log("add task: ", taskName);

  this.setState({
    task: [
      ...this.state.task,
      {
        name: taskName,
        id: Date.now(),
        completed: false
      }
    ]
  })
}

  render() {
    console.log("rendering...")
    return (
      <div className="App">
        <div className="header">
          <h1>Todo Lists</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          task={this.state.task}
          toggleDone={this.toggleDone}
          clearDone={this.clearDone}
        />
        
      </div>
    );
  }
}

export default App;