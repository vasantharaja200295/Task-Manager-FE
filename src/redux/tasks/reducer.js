import events from "./events";

const initialState = [];

export default function TaskReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case events.SET_TASKS:
      return payload;

    default:
      return state;
  }
}
