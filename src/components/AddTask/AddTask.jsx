import React from 'react';

function AddTask({setText, addTask, text}) {
  
    return (
        <div className="add-task">
             
          <input 
            type="text" 
            className="form-control" 
            placeholder="Write your task here" 
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2" 
            onChange={(event) => setText(event.target.value)}            
            value={text} />
          <button 
            type="button" 
            className="btn" 
            onClick={addTask}>Add</button>
        </div>
    );
}

export default AddTask;