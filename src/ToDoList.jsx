import React, { useContext } from 'react';
import { ToDoContext } from './context/ToDoContext';

const ToDoList = () => {
  const { theme, toggleTheme } = useContext(ToDoContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToDoList;
