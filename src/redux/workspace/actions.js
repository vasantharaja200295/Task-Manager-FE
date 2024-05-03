import events from './events';


export const setWorkspace = (dispatch, data) => {
    dispatch({ type: events.SET_WORKSPACE, payload: data });
};

export const setWorkSpaceUsers = (dispatch, data) => {
    dispatch({ type: events.SET_WORKSPACE_USERS, payload: {users:data} });
}

