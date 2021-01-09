import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/stores/rootStore';

/* COMPONENTS */
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

function TodoApp() {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </Provider>
  );
}

export default TodoApp;