import events from "./events";

const initialState = {
    overlayLoading : false
}

export default function OverlayReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case events.SET_OVERLAY_LOADING:
            return { ...state, overlayLoading: payload };
        default:
            return state;
    }
}