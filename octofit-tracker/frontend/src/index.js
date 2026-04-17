
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set the backend API base URL from environment variable
if (!process.env.REACT_APP_CODESPACE_URL) {
  // Try to infer from window.location if not set
  const { hostname, protocol } = window.location;
  const port = '8000';
  const url = `${protocol}//${hostname.replace('-3000', '-' + port)}.app.github.dev`;
  process.env.REACT_APP_CODESPACE_URL = url;
  // Log for debugging
  console.log('Inferred REACT_APP_CODESPACE_URL:', url);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
