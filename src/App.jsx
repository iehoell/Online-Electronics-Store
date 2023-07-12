import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './MainPage';
import ProductPage from './ProductPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/> } />
                    <Route path='ProductPage' element={<ProductPage />} />
                    <Route path='production' element={<MainPage />} />
                    <Route path='PC' element={<MainPage />} />
                    <Route path='mobile' element={<MainPage />} />
                    <Route path='consoles' element={<MainPage />} />
                </Routes>
            </BrowserRouter>
            <Header />
            <Footer />
        </div>
    );
}
export default App;