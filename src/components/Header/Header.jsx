import React from 'react';
import headerStyles from './headerStyles.module.scss';

function Header(){
    return(
        <header>
            <div className={headerStyles.Header}>
                <div className={headerStyles.productTitle}>
                    <a href="/">
                        Online Electronics Store
                    </a>
                </div>
                <div className={headerStyles.typesOfProducts}>
                    <div className={headerStyles.production}>
                        <a href="/">
                            Продукция
                        </a>
                    </div>
                    <div className={headerStyles.PCs}>
                        <a href="/">
                            PC
                        </a>
                    </div>
                    <div className={headerStyles.mobileDevices}>
                        <a href="/">
                            Мобильные устройства
                        </a>
                    </div>
                    <div className={headerStyles.consoles}>
                        <a href="/">
                            Приставки
                        </a>
                    </div>
                </div>
                <div className={headerStyles.telephoneNumber}>
                    <p>
                        8-800-800-88-88
                    </p>
                </div>
            </div>
        </header>
    );
}
export default Header;