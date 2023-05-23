import React, { useContext } from 'react';
import Task from '../Task/Task';
import { globalContext } from '../../contexts/globalContext';


function TaskList() {
    const {state, dispatch} = useContext(globalContext) 
      
    const completeTask = (id) => { 
        dispatch({
            type: 'COMPLETE_TASK',
            payload: id
        });
        dispatch({
            type: 'SAVE_TASK',
        })    
    }
    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
        dispatch({
            type: 'SAVE_TASK',
        })
    } 
    return (
        <div className="tasks">
        <h4>Tasks: </h4>
            {state.tasks.map((task) => (        
                <div className="form-check" key={task.id}>              
                <Task task={task} completeTask={completeTask} deleteTask={deleteTask}/>        
                </div>      
            
            ))}
        </div>  
    );
}

export default TaskList;