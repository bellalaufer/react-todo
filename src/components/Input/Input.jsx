import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Input() {
  const {dispatch} = useContext(globalContext)  

  const [text, setText] = useState("");

  const addTask = () => {    
    if (text.trim() === "") {
      return
    }
  const newTask = {
      text: text,
      completed: false,
      id: Date.now(),
    };
    dispatch({
      type: 'ADD_TASK',
      payload: newTask
    })
    dispatch({
      type: 'SAVE_TASK',
  })
    setText("");    
  }
  
    return (
        <div className="add-task">
          <input 
            type="text" 
            className="form-control w-50 mb-3" 
            placeholder="Write your task here" 
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2" 
            onChange={(event) => setText(event.target.value)}            
            value={text} />
          <button 
            type="button" 
            className="btn btn-primary mb-3" 
            onClick={addTask}>Add</button>
        </div>
    );
}

export default Input;