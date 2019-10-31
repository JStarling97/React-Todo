import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.task.map(task => (
                <Todo 
                    key={task.id}
                    task={task}
                    toggleDone={props.toggleDone}
                />
            ))}
            <button className="clear-btn" onClick={props.clearDone}>
                Clear Done
            </button>
        </div>
        
    )
    
}


export default TodoList