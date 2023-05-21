export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {...state, tasks: [...state.tasks, newTask]}            
        }
        case 'COMPLETE_TASK' :{
            const taskId = action.payload;
            return { ...state, tasks: state.tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                } else {
                    return task;
                }
                
            })};
        }
        case 'DELETE_TASK': {
            const deletedTaskId = action.payload;
            return {...state, tasks: state.tasks.filter(task => task.id !== deletedTaskId)}
        }
        default: {
            return state
        }
    }
}