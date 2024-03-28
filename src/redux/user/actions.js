import events from "./events"


export const loginUser = (dispatch, data) =>{
    dispatch({type:events.LOGIN, payload: {...data, isLoggedIn:true}})
}

export const logoutUser = (dispatch)=>{
    dispatch({type:events.LOGOUT, package:{}})
}

export const updateUser = (dispatch, data) =>{
    dispatch({type: events.UPDATE_USER_DATA, payload: data})
}