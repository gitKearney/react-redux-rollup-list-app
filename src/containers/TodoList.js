import React from 'react';

import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../redux/actions/TodoActions';
import {FILTER_TYPES} from '../redux/actionTypes';

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
    remove_todo: (id) => {
      const result = removeTodo(id);
      dispatch(result);
    },
    toggle_todo: (id) => {
      const result = toggleTodo(id);
      dispatch(result);
    },
  };
}

/**
 * lists items in the grocery list
 * @param object props
 * @constructor
 */
function TodoList(props) {

  const removeItem = (event, index) => {
    // we call stop propagation here because the span is located in
    //  a <li> which contains an onClick handler. So, any click will
    // bubble up
    event.stopPropagation();
    event.preventDefault();

    props.remove_todo(index);
  };

  const listItems = [];
  props.todos.items.forEach((item, index) => {
    let color = item.status ? 'w3-green' : 'w3-red';
    let style = 'w3-display-container ' + color;

    let listItem = (
      <li key={index} className={style} onClick={() => props.toggle_todo(index)}>
        <span className="w3-button w3-transparent w3-display-right"
              onClick={(event) => removeItem(event, index)}>
          &times;
        </span>
        {item.title}
      </li>
    );

    switch(props.todos.filter_type) {
      case FILTER_TYPES.TODO:
        if (!item.status) {
          listItems.push(listItem)
        }
        break;
        case FILTER_TYPES.DONE:
          if (item.status) {
            listItems.push(listItem);
          }
          break;
      default:
        // display all items
        listItems.push(listItem);
    }
  });

  return(
  <ul className="w3-ul w3-margin-bottom">
    {listItems}
  </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
