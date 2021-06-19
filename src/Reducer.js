import {
  SET_USERS,
  SET_SELECTED_USER,
  GET_EVENTS,
  CLEAR_EVENTS,
  COMPARE_EVENTS,
  SELECT_ITEM,
  RESET_USER,
} from './constants';

const initialState = {
  users: [],
  selectedUser: '',
  addresses: [],
  events: [],
  compareEvents: null,
};

const Reducer = (state = initialState, action) => {
  if (action.type === SET_USERS) {
    const users = action.payload;
    return { ...state, users };
  }
  if (action.type === SET_SELECTED_USER) {
    const { userId, addressArray } = action.payload;
    return {
      ...state,
      selectedUser: userId,
      addresses: addressArray,
      events: [],
    };
  }
  if (action.type === GET_EVENTS) {
    const events = action.payload;
    return { ...state, events };
  }
  if (action.type === CLEAR_EVENTS) {
    return { ...state, events: [] };
  }
  if (action.type === COMPARE_EVENTS) {
    const compareEvents = action.payload;
    return { ...state, compareEvents };
  }
  // toggles the selection of addressCards or addressEvent
  if (action.type === SELECT_ITEM) {
    const { index, item } = action.payload;
    const items = [...state[item]];
    const toggle = items[index];
    toggle.selected = !toggle.selected;
    return { ...state, [item]: items };
  }
  if (action.type === RESET_USER) {
    const { users } = state;
    return { ...initialState, users };
  }
  return { ...state };
};

export default Reducer;
