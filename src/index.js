import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './app/styles/headerStyles.scss';
import './app/styles/MainPage.scss';
import './app/styles/footerStyles.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from "./app/ProductPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const product = ReactDOM.createRoot(document.getElementById('product'))
product.render(
    <React.StrictMode>
        <ProductPage />
    </React.StrictMode>
)

reportWebVitals();