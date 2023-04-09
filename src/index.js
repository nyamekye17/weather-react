import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a
        href="https://github.com/nyamekye17/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code,
      </a>
      by Nana Aba Acquah
    </footer>
  </React.StrictMode>
);


