import events from "./events";

// Define action creators
export const setUserData = (dispatch, data) => {
  dispatch({ type: events.LOGIN, payload: { ...data, isLoggedIn: true } });
};

export const removeUserData = (dispatch) => {
  dispatch({ type: events.LOGOUT });
};

export const updateUser = (dispatch, data) => {
  dispatch({ type: events.UPDATE_USER_DATA, payload: data });
};