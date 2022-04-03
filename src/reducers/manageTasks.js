export default function manageTasks(state = [], action) {
    switch (action.type) {
        case "START_TASKS_REQUEST":
            return state
        case "LOAD_TASKS":
            console.log(action)
            return action.tasks;
        case "ADD_TASK":
            return [...state, action.task]
        case "DELETE_TASK":
            return [...state.filter( task => task.id !== action.taskId)]
        case "UPDATE_TASK":
            return state.map( (task) => {
                if (task.id === action.task.id) {
                  task = action.task
                }
                return task
              });
        default:
            return state;
        
    }
}