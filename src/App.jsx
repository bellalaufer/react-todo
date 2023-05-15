import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";


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
      }));    
    
  }
  
  
  return (
    <div className="App">
      <Main setText={setText} addTask={addTask} text={text} tasks={tasks} completeTask={completeTask}/>
    </div>
  );
}

export default App;
