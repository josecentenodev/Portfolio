import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Background from './pages/Background/Background';
import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
         <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-10">
            <DarkModeToggle />
          </div>
       
        <App />
          </Background>
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
