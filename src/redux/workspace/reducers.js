import events from "./events";

const initialState = {}

export default function WorkspaceReducer(state = initialState, action) {
    const { payload, type } = action;
    switch(type){
        case events.SET_WORKSPACE:
            return payload;
        case events.SET_WORKSPACE_USERS:
            return payload;
        default:
            return state;
    }
}