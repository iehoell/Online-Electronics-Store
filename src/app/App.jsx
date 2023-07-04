import logo from '../assets/logo.svg';
import './styles/App.css';
import './styles/headerStyles.scss';
import './styles/footerStyles.scss';
import './styles/content.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from "./components/MainPage";
const ReactDOM = require("react-dom/client");
const React = require("react");

function App() {
    return (
        <div>
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;
