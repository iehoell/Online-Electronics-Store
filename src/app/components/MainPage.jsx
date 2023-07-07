import { Link } from 'react-router-dom';
import React from 'react';

function MainPage(){
    return(
        <div className="MainPage">
            <div className="content__main-container">
                <div className="content__main-container__configuration-of-products">
                    <div className="content__main-container__categories">
                        <h3>Категория</h3>
                        <ul>
                            <li className="content__main-container__categories__listItem"><a href="/">Все категории</a>
                            </li>
                            <li className="content__main-container__categories__listItem"><a href="/">Комплектующие для
                                ПК</a></li>
                            <li className="content__main-container__categories__listItem"><a href="/">Мобильные
                                устройства</a></li>
                            <li className="content__main-container__categories__listItem"><a href="/">Приставки</a></li>
                        </ul>
                        <div className="content__main-container__categories__onSale">
                            <b className="content__main-container__categories__onSaleText">
                                По акции
                            </b>
                            <label className="content__main-container__categories__switch">
                                <input type="checkbox"/>
                                    <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="content__main-container__products-list">
                    <div className="content__main-container__products-list__dropdownSorting">
                        <select className="sortingSelect">
                            <option selected value="Популярные">Популярные</option>
                            <option value="По скидке (%)">По скидке (%)</option>
                            <option value="Сначала недорогие">Сначала недорогие</option>
                            <option value="Сначала дорогие">Сначала дорогие</option>
                        </select>
                    </div>
                    <div className="content__main-container__products-list__underline"></div>
                    <div className="content__main-container__products-list__products">
                        <h3>Видеокарты</h3>
                        <div className="content__main-container__products-list__products__product">
                            <div className="content__main-container__products-list__products__product__card">
                                <div className="content__main-container__products-list__products__product__photo">
                                    <img
                                        src="https://c.dns-shop.ru/thumb/st4/fit/500/500/35847a5eb46c9cc12a9a786f9b4d9140/cbd51a7e8677521d28cb226b83f2f44fe3571ae8e2992d2c4b10506e3587abec.jpg.webp"
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product1"
                                   className="content__main-container__products-list__products__product__name">
                                    Видеокарта Palit GeForce RTX 3060 Dual (LHR) [NE63060019K9-190AD] [PCI-E 4.0 12 ГБ
                                    GDDR6,
                                    192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                                </a>
                                <div className="content__main-container__products-list__products__product__card__buy">
                                    <b className="content__main-container__products-list__products__product__card__price">30499
                                        ₽</b>
                                    <button className="buyButton">Купить</button>
                                </div>
                            </div>
                        </div>
                        <div className="content__main-container__products-list__products__product">
                            <div className="content__main-container__products-list__products__product__card">
                                <div className="content__main-container__products-list__products__product__photo">
                                    <img
                                        src="https://c.dns-shop.ru/thumb/st1/fit/500/500/dfe4454c255090040b61cbf9b49de401/8f034774b9ef9d7f28e047ab30f3e17b5f0b9f2155d14051d03bd435db8d8667.png.webp"
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product2"
                                   className="content__main-container__products-list__products__product__name">
                                    Видеокарта Palit GeForce RTX 4070 Ti GamingPro [NED407T019K9-1043A]
                                    [PCI-E 4.0 12 ГБ GDDR6X, 192 бит, DisplayPort x3, HDMI, GPU 2310 МГц]
                                </a>
                                <div className="content__main-container__products-list__products__product__card__buy">
                                    <b className="content__main-container__products-list__products__product__card__price">81999
                                        ₽</b>
                                    <button className="buyButton">Купить</button>
                                </div>
                            </div>
                        </div>
                        <div className="content__main-container__products-list__products__product">
                            <div className="content__main-container__products-list__products__product__card">
                                <div className="content__main-container__products-list__products__product__photo">
                                    <img
                                        src="https://c.dns-shop.ru/thumb/st1/fit/500/500/f1efabf02f5c2508fde15bd179b10fd7/4bdc5b9577a2631571957cb64876fd9ddb8a6a36cb056b23821bfd38cc932716.jpg.webp"
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product3"
                                   className="content__main-container__products-list__products__product__name">
                                    Видеокарта MSI GeForce RTX 4090 SUPRIM X [RTX 4090 SUPRIM X 24G]
                                    [PCI-E 4.0 24 ГБ GDDR6X, 384 бит, DisplayPort x3, HDMI, GPU 2235 МГц]
                                </a>
                                <div className="content__main-container__products-list__products__product__card__buy">
                                    <b className="content__main-container__products-list__products__product__card__price">190499
                                        ₽</b>
                                    <button className="buyButton">Купить</button>
                                </div>
                            </div>
                        </div>
                        <div className="content__main-container__products-list__products__product">
                            <div className="content__main-container__products-list__products__product__card">
                                <div className="content__main-container__products-list__products__product__photo">
                                    <img
                                        src="https://c.dns-shop.ru/thumb/st1/fit/500/500/b5666bb9d395add56e2002e1ccde6bf5/8b394c015030e048b3876171569f5db99b76222ae15137b923ec5c05c1b0d901.jpg.webp"
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product4"
                                   className="content__main-container__products-list__products__product__name">
                                    Видеокарта MSI AMD Radeon RX 6750 XT MECH 2X OC [RX 6750 XT MECH 2X 12G OC]
                                    [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 2150 МГц]
                                </a>
                                <div className="content__main-container__products-list__products__product__card__buy">
                                    <b className="content__main-container__products-list__products__product__card__price">40999
                                        ₽</b>
                                    <button className="buyButton">Купить</button>
                                </div>
                            </div>
                        </div>
                        <div className="content__main-container__products-list__products__product">
                            <div className="content__main-container__products-list__products__product__card">
                                <div className="content__main-container__products-list__products__product__photo">
                                    <img
                                        src="https://c.dns-shop.ru/thumb/st1/fit/500/500/3139443e502887411b3e9beabd6843f2/e67fead6e29baafb1d0d6e8a224f8641834ade0368092a07aa2a89cf86edfcca.jpg.webp"
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product5"
                                   className="content__main-container__products-list__products__product__name">
                                    Видеокарта ASUS GeForce RTX 4080 TUF Gaming OC Edition [TUF-RTX4080-O16G-GAMING]
                                    [PCI-E 4.0 16 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI x2, GPU 2210 МГц]
                                </a>
                                <div className="content__main-container__products-list__products__product__card__buy">
                                    <b className="content__main-container__products-list__products__product__card__price">137999
                                        ₽</b>
                                    <button className="buyButton">Купить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;