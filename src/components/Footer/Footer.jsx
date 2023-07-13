import React from 'react';
import footerStyles from './footerStyles.module.scss';

function Footer(){
    return(
        <footer>
            <div className={footerStyles.Footer}>
                <div className={footerStyles.footerContainers}>
                    <div className={footerStyles.company}>
                        <h5>О компании</h5>
                        <ul className={footerStyles.menu}>
                            <li><a href="/about">О Компании</a></li>
                            <li><a href="/news">Новости</a></li>
                            <li><a href="/partners">Партнерам</a></li>
                            <li><a href="/career">Вакансии</a></li>
                            <li><a href="/policy">Политика конфиденциальности</a></li>
                            <li><a href="/personal-data">Персональные данные</a></li>
                            <li><a href="/rules">Правила продаж</a></li>
                            <li><a href="/rules">Правила пользования сайта</a></li>
                            <li><a href="/service-center">Сервисные центры</a></li>
                        </ul>
                    </div>
                    <div className={footerStyles.buyers}>
                        <h5>Покупателям</h5>
                        <ul>
                            <li><a href="/help">Как оформить заказ</a></li>
                            <li><a href="/help">Способы оплаты</a></li>
                            <li><a href="/help">Кредиты</a></li>
                            <li><a href="/help">Доставка</a></li>
                            <li><a href="/help">Статус заказа</a></li>
                            <li><a href="/help">Обмен, возврат, гарантия</a></li>
                            <li><a href="/help">Проверка статуса ремонта</a></li>
                        </ul>
                    </div>
                    <div className={footerStyles.connection}>
                        <h5>Как связаться</h5>
                        <p className={footerStyles.connectionText}>8-800-800-88-88 (c 03:00 до 22:00)</p>
                        <p className={footerStyles.connectionText}><a className={footerStyles.address} href="/address">Адреса магазинов г.Йошкар-Ола</a></p>
                        <div className="text-field">
                            <label className="text-field__label">Следите за новинками и акциями: </label>
                            <div className="text-field__icon text-field__icon_email">
                                <input className={footerStyles.textField__input} type="email"
                                       placeholder="Введите Email и подпишитесь" value=""></input>
                            </div>
                        </div>
                        <p className={footerStyles.licenseAgreement}>
                            Подписываясь на рассылку, Вы соглашаетесь
                            c условиями
                            <a href="/policy"> политики конфиденциальности </a>
                            и
                            <a href="/policy"> политики обработки персональных данных</a>
                        </p>
                    </div>
                </div>
                <div className={footerStyles.copyright}>
                    Copyright © 2023 All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;