import {ADD_TODO, TOGGLE_TODO, FILTER_TODO, REMOVE_TODO} from '../actionTypes';
import {FILTER_TYPES} from '../actionTypes';

const initialState = {
  items: [],
  filter_type: FILTER_TYPES.ALL,
};

export function todoReducer(state=initialState, action) {
  const newState = {...state};
  const {payload} = action;

  switch (action.type) {
    case ADD_TODO:
      newState.items.push(payload);
      break;
    case TOGGLE_TODO:
      newState.items[payload.id].status = !state.items[payload.id].status;
      break;
    case FILTER_TODO:
      newState.filter_type = payload.filter;
      break;
    case REMOVE_TODO:
      newState.items.splice(payload.id, 1);
      break;
    default:
      break;
  }

  return newState;
}