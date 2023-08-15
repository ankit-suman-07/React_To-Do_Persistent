import React, { useContext } from 'react';
import { ToDoContext } from './context/ToDoContext';

const ToDoMain = () => {
  const { theme, toggleTheme } = useContext(ToDoContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToDoMain;
