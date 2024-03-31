import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import TaskReducer from "./tasks/reducer";
import AuthReducer from "./auth/reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    task: TaskReducer,
    auth:AuthReducer
})

export default rootReducer;
