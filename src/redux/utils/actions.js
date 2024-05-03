import events from "./events";

export const setOverLayLoading = (dispatch, data) => {
    dispatch({ type: events.SET_OVERLAY_LOADING, payload: data });
}