import { combineReducers } from "redux";
import UserReducer from "./user/reducer";
import TaskReducer from "./tasks/reducer";
import AuthReducer from "./auth/reducer";
import WorkspaceReducer from "./workspace/reducers";
import OverlayReducer from "./utils/reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    task: TaskReducer,
    auth:AuthReducer,
    workspace:WorkspaceReducer, 
    overlayLoading:OverlayReducer
})

export default rootReducer;
