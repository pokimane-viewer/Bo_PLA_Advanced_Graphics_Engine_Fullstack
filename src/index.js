// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// If using React 18, we use createRoot:
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
