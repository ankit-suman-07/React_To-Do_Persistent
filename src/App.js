import React from 'react';
import { ToDoContext } from './context/ToDoContext';
import { ToDoProvider } from './context/ToDoContext';
import ToDoMain from './ToDoMain';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <ToDoProvider>
      <div className="app">
        <h1>Theme Toggle App</h1>
        <ToDoMain />
      </div>
    </ToDoProvider>
  );
};

export default App;
