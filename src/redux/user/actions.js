import events from "./events"


export const updateUser = (dispatch, data) =>{
    dispatch({type: events.UPDATE_USER_DATA, payload: data})
}