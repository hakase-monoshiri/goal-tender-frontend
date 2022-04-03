export default function manageGoals(state = [], action) {
    switch (action.type) {
        case "START_GOALS_REQUEST":
            return state
        case "LOAD_GOALS":
            console.log(action)
            return action.goals;
        case "ADD_GOAL":
            return [...state, action.goal]
        case "DELETE_GOAL":
            return [...state.filter( goal => goal.id !== action.goal)]
        default:
            return state;
        
    }
}