import events from "./events";

const initialState = {};

export default function UserReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case events.SET_USER_DATA:
      return payload;

    case events.UPDATE_USER_DATA:
      return { ...state, ...payload };
    
    default:
        return state
  }
}
