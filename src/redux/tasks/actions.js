import events from "./events";

export const setTasks = (dispatch, data) => {
    dispatch({ type: events.SET_TASKS, payload: data });
}

export const updateTaskStatus = (dispatch, taskId, status) => {
    dispatch({ type: events.UPDATE_TASK_STATUS, payload: { taskId, status } });
}
