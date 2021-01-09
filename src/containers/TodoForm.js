import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

/* Redux Action Creators */
import {addTodo} from '../redux/actions/TodoActions';

/**
 * @description state comes from the reducer (in this case TodoReducer) when 
 * we call our root reducer (redux/reducer/index) we get an object that 
 * contains functions.
 * @param {Object} state 
 * @return {Object}
 */
const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
}

/**
 * @description actions are defined in an actions file. Each action returns an 
 * object containing 2 properties: type & payload
 * @param {function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    add_todo: (item) => {
      const result = addTodo(item);
      dispatch(result);
    },
  };
}

function TodoForm (props) {
  const [input, setInput] = useState('');

  const clearInput = (event) => {
    setInput('');
  };

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = (event) => {
    event.stopPropagation();

    const _input = input.trim();
    setInput('');

    if (_input.length === 0) {
      return;
    }

    props.add_todo(_input);
  };

  return (
    <div className="w3-container">
      <p>
        <label>ITEM:</label>
        <input
          className="w3-input"
          type="text"
          onChange={updateInput}
          value={input}
        />
      </p>

      <p>
        <button
          className="w3-btn w3-round-medium w3-green w3-margin-right"
          onClick={addTodo}
        >
          Add
        </button>
        <button
          className="w3-button w3-round-medium w3-white w3-border w3-border-red"
          onClick={clearInput}
        >
          Clear
        </button>
      </p>
    </div>
  );
}

TodoForm.propTypes = {
  add_todo: PropTypes.func.isRequired,
  todos: PropTypes.object.isRequired,
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer;