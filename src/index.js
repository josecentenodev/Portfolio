import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>   
        <DarkModeToggle />
        <App />
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
