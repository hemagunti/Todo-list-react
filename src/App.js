import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

function App() {
  return (
    <div className="container wrapper">
      <div className="row">
        <div className="col-6 mx-auto col-md-4 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
