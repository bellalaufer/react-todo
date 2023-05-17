import React from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

function Main({setText, addTask, text, tasks, completeTask}) {
    return (
        <main className="container mt-5">      
            <h2>My To-Do List</h2>
            <AddTask setText={setText} addTask={addTask} text={text}/>               
                
            <TaskList tasks={tasks} completeTask={completeTask}/>

      </main>
    );
}

export default Main;