import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            <button className="clear-btn" onClick={props.clearDone}>
                Clear Completed
            </button>
            {props.task.map(task => (
                <Todo 
                    key={task.id}
                    task={task}
                    toggleDone={props.toggleDone}
                />
            ))}
            
        </div>
        
    )
    
}


export default TodoList