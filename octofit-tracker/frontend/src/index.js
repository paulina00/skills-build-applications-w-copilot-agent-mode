
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set the backend API base URL from environment variable or infer from window.location
if (!process.env.REACT_APP_CODESPACE_URL) {
  const { hostname, protocol } = window.location;
  let url = `${protocol}//${hostname}`;
  // If running in Codespaces, adjust port
  if (hostname.includes('-3000')) {
    url = `${protocol}//${hostname.replace('-3000', '-8000')}.app.github.dev`;
  }
  process.env.REACT_APP_CODESPACE_URL = url;
  console.log('Inferred REACT_APP_CODESPACE_URL:', url);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
