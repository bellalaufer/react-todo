export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {...state, tasks: [...state.tasks, newTask]}            
        }
        case 'COMPLETE_TASK' :{
            const taskId = action.payload;
            const updatedTasks = state.tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task;
                }
                
            });
            return { ...state, tasks: updatedTasks }
        }
        case 'DELETE_TASK': {
            const deletedTaskId = action.payload;
            const updatedTasks = state.tasks.filter(task => task.id !== deletedTaskId);
            return {...state, tasks: updatedTasks}
        }
        case 'SAVE_TASK': {
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
            return state;
        }
        case 'LOAD_TASKS': {
            const storedTasks = localStorage.getItem('tasks');
            const tasks = storedTasks ? JSON.parse(storedTasks) : [];
            return { ...state, tasks };
        }
        default: {
            return state
        }
        
    }
}