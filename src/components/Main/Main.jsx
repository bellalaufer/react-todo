import React from 'react';
import TaskList from '../TaskList/TaskList';
import Input from '../Input/Input';

function Main() {
    
    return (
        <main className="container mt-5">      
            <h2>My To-Do List</h2>
            <Input />            
            <TaskList />

        </main>
    );
}

export default Main;