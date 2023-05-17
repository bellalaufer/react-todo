import { useState } from "react";
import { useLocalStorage } from "./hooks/useLS";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useLocalStorage('tasks', []); 
  
  

  const addTask = () => {
    if (text.trim() === "") {
      return
    } 
    const newTask = {
      text: text,
      completed: false,
      id: Date.now()     
            
    }
    localStorage.setItem(`task-${newTask.id}`, JSON.stringify(newTask.text));
    setTasks((prev) => [...prev, newTask])
    setText("")
    
    
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
      <Header />
      <Main setText={setText} addTask={addTask} text={text} tasks={tasks} completeTask={completeTask}/>
      <Footer />
    </div>
  );
}

export default App;
