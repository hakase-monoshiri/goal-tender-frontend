import { combineReducers } from "redux";
import manageGoals from "./manageGoals";
import manageTasks from "./manageTasks";
import mangeUsers from "./manageUsers";

const rootReducer = combineReducers({
  user: mangeUsers,
  goals: manageGoals,
  tasks: manageTasks,
});

export default rootReducer;