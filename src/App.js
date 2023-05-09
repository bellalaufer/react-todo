import { useState } from "react";
import "./App.css"


function App() {

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  

  const addTask = () => {
    if (text.trim() === "") {
      return
    } 
    const newTask = {
      text: text,
      completed: false,
      id: id     
            
    }
    setTasks((prev) => [...prev, newTask])
    setText("")
    setId((prev) => prev + 1)
  }

  const completeTask = (id) => {  
    
    setTasks((prev) => prev.map(task => {
      if (task.id === id) {
        return {...task, completed: true}
      } else {
        return task;
      }
    })
    );
    
    
  }
  
  
  return (
    <div className="App">
      <main className="container my-5">        
      
        <h2>My To-Do List</h2>
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
        <h4>Tasks: </h4>
        <div className="tasks">
          {tasks.map((task, index) => (        
            <div className="form-check" key={task.id}>
              <div className="tasks">
          <input 
                className="form-check-input" 
                type="checkbox"          
                onClick={() => completeTask(task.id)}
                value={index} 
                id={task.id} /> 
              <label 
                className={task.completed ? "form-check-label completed" : "form-check-label"}
                htmlFor={task.id}>                
                {task.text}
              </label>  
        </div>
            </div>      
        
        ))}
        </div>     

      </main>
    </div>
  );
}

export default App;
