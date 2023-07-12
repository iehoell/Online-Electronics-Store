import React from 'react';

function Header(){
    return(
        <header>
            <div className="Header">
                <div className="header__productTitle">
                    <a href="/">
                        Online Electronics Store
                    </a>
                </div>
                <div className="header__typesOfProducts">
                    <div className="typesOfProducts__production">
                        <a href="/">
                            Продукция
                        </a>
                    </div>
                    <div className="typesOfProducts__PCs">
                        <a href="/">
                            PC
                        </a>
                    </div>
                    <div className="typesOfProducts__mobileDevices">
                        <a href="/">
                            Мобильные устройства
                        </a>
                    </div>
                    <div className="typesOfProducts__consoles">
                        <a href="/">
                            Приставки
                        </a>
                    </div>
                </div>
                <div className="header__telephoneNumber">
                    <p>
                        8-800-800-88-88
                    </p>
                </div>
            </div>
        </header>
    );
}
export default Header;