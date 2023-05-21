import React from 'react';

function Task({task, completeTask, deleteTask}) {
    return (
      <div className="row">
        <div className="col">
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
            id={task.id}
          />
          <label
            className={
              task.completed
                ? "form-check-label text-decoration-line-through"
                : "form-check-label"
            }
            htmlFor={task.id}
          >
            {task.text}
          </label>
        </div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={() => deleteTask(task.id)}
          >
            Del
          </button>
        </div>
      </div>
        // <div>
        //     <input 
        //         className="form-check-input" 
        //         type="checkbox"
        //         checked={task.completed}          
        //         onChange={() => completeTask(task.id)}                 
        //         id={task.id} /> 
        //       <label 
        //         className={task.completed ? "form-check-label text-decoration-line-through" : "form-check-label"}
        //         htmlFor={task.id}>                
        //         {task.text}
        //       </label> 
        //       <button 
        //       type="button" 
        //       className="btn btn-outline-dark btn-sm"
        //       onClick={() => deleteTask(task.id)}>Del</button>
        // </div>
    );
}

export default Task;