export default function mangeUsers(state = {}, action) {
    switch (action.type) {
        case "START_LOGIN_REQUEST":
            return state
        case "START_USER_LOAD_REQUEST":
            return state
        case "LOG_IN_USER":
            console.log(action)
            return {...action.user};
        case "LOG_OUT_USER":
            console.log(action)
            return {};
        case "START_USER_CREATE_REQUEST":
            return state
        default:
            return state;
        
    }
}