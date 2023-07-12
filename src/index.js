import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './components/Header/headerStyles.scss';
import './components/MainPage/MainPage.scss';
import './components/Footer/footerStyles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();