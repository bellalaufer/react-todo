import React, { useContext } from 'react';
import Task from '../Task/Task';
import { globalContext } from '../../contexts/globalContext';

function TaskList() {
    const {state, dispatch} = useContext(globalContext)
    //const [text, setText] = useState("");

    const completeTask = (id) => { 
        dispatch({
            type: 'COMPLETE_TASK',
            payload: id
        })
    
        // setTasks((prev) => prev.map(task => {        
        //     if (task.id === id) {
        //         return {...task, completed: true}
        //     } else {
        //         return task;
        //     }
        // }));    
    } 
    return (
        <div className="tasks">
        <h4>Tasks: </h4>
            {state.tasks.map((task) => (        
                <div className="form-check" key={task.id}>              
                <Task task={task} completeTask={completeTask}/>        
                </div>      
            
            ))}
        </div>  
    );
}

export default TaskList;