import React, { createContext, useContext, useState } from 'react';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ToDoContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
