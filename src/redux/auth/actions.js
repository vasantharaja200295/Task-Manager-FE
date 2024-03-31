import events from "./events";


export function setToken(dispatch, data) {
    dispatch({type:events.SET_AUTH_TOKEN, payload:data})
}

export function deleteToken (dispatch){
    dispatch({type:events.DELETE_AUTH_TOKEN})
}