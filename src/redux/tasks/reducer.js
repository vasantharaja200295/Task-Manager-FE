import events from "./events";

const initialState = [];

export default function TaskReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case events.SET_TASKS:
            return payload;
            
        case events.UPDATE_TASK_STATUS:
            return state.map(task => 
                task._id === payload.taskId ? { ...task, status: payload.status } : task
            );

        default:
            return state;
    }
}
