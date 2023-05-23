import React from 'react';
import TaskList from '../TaskList/TaskList';
import Input from '../Input/Input';

import { useEffect } from 'react';
import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

function Main() {
    const {dispatch} = useContext(globalContext) 
    useEffect(() => {
        dispatch({ 
            type: 'LOAD_TASKS' });
    }, []);
    return (
        <main className="container mt-5">      
            <h2>My To-Do List</h2>
            <Input />            
            <TaskList />

        </main>
    );
}

export default Main;