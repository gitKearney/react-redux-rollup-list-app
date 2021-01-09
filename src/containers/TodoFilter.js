import React from 'react';

import {FILTER_TYPES} from '../redux/actionTypes';
import {filterTodo} from '../redux/actions/TodoActions';
import {connect} from 'react-redux';

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
};

/**
 * @description actions are defined in an actions file. Each action returns an 
 * object containing 2 properties: type & payload
 * @param {function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    filter_todos: (filterType) => {
      const result = filterTodo(filterType);
      dispatch(result);
    },
  };
};

/**
 *
 * @param {Object} props
 * @constructor
 */
function TodoFilter(props) {
  const filterKeys = Object.keys(FILTER_TYPES);
  const filters = filterKeys.map((key, index) => {
    const res = {
      id: index,
      key,
      selected: false,
    };

    if (props.todos.filter_type === key) {
      res['selected'] = true;
    }

    return res;
  })

  const handleFilterChange = (event) => {
    props.filter_todos(event.target.value);
  }

  const filterList = filters.map(filter => {
    return(
      <p key={filter.id}>
        <input
          className="w3-radio"
          type="radio"
          name={filter.key}
          value={filter.key}
          checked={filter.selected}
          onChange={handleFilterChange}
        />
        <label>{filter.key}</label>
      </p>
    );
  });

  return (filterList);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);