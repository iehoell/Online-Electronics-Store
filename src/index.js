import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './app/styles/headerStyles.scss';
import './app/styles/content.scss';
import './app/styles/footerStyles.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();