import {ADD_TODO, TOGGLE_TODO, FILTER_TODO, REMOVE_TODO} from '../actionTypes';

export const addTodo = (item) => ({
  type: ADD_TODO,
  payload: {
    title: item,
    status: false,
  }
});

export const toggleTodo = (id) => {
  return ({
    type: TOGGLE_TODO,
    payload: { id }
  });
};

export const filterTodo = (filter) => {
  return {
    type: FILTER_TODO,
    payload: {filter},
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {id},
  }
}

