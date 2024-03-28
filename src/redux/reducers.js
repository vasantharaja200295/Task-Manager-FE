import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import TaskReducer from "./tasks/reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    task: TaskReducer
})

export default rootReducer;
