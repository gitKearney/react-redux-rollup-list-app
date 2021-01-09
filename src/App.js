import React from 'react';
import ReactDOM from "react-dom";
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="w3-container">
      <div className="w3-panel w3-card-4">
        <div className="w3-container w3-blue">
          <h2>Grocery List</h2>
        </div>

        <TodoApp />

      </div>
    </div>
  );
}

let domContainer = document.getElementById('root');
ReactDOM.render(<App />, domContainer);