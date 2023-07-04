const React = require("react");

function Header(){
    return(
        <header>
            <div className="Header">
                <div className="header__productTitle"><a href="/index.html">Online Electronics Store</a></div>
                <div className="header__typesOfProducts">
                    <div className="header__typesOfProducts__production"><a href="/production">Продукция</a></div>
                    <div className="header__typesOfProducts__PCs"><a href="/PC">PC</a></div>
                    <div className="header__typesOfProducts__mobileDevices"><a href="/mobile">Мобильные
                        устройства</a></div>
                    <div className="header__typesOfProducts__consoles"><a href="/consoles">Приставки</a></div>
                </div>
                <div className="header__telephoneNumber"><p>8-800-800-88-88</p></div>
            </div>
        </header>
    );
}
export default Header;