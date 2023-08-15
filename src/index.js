import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoProvider } from './context/ToDoContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoProvider >
    <App />
    </ToDoProvider>
    
  </React.StrictMode>
);

