import events from "./events";

const initialState = {};

export default function UserReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case events.LOGIN:
      return payload;

    case events.LOGOUT:
      return {};

    case events.UPDATE_USER_DATA:
      return { ...state, ...payload };

    default:
      return state;
  }
}
