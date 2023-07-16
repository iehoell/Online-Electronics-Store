import productPage from '../productPage.module.scss'
import React from 'react';

import products from '../../../mockData/productCardsData';

function MainParameters(){
    return(
        <div className={productPage.characteristics}>
            <div className={productPage.commonParameters}>
                <h6>Общие параметры</h6>
                <div className={productPage.commonParameters__item}>
                    <p>Тип </p>
                    <p id="type">{products[0].type}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Модель</p>
                    <p id="model">{products[0].model}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Код производителя</p>
                    <p id="code">{products[0].code}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Цвет</p>
                    <p id="color">{products[0].color}</p>
                </div>
            </div>
            <div className={productPage.mainParameters}>
                <h6>Основные параметры</h6>
                <div className={productPage.mainParameters__item}>
                    <p>Графический процессор</p>
                    <p id="graphic">{products[0].graphic}</p>
                </div>
                <div className={productPage.mainParameters__item}>
                    <p>Микроархитектура</p>
                    <p id="microarchitecture">{products[0].microarchitecture}</p>
                </div>
                <div className={productPage.mainParameters__item}>
                    <p>Техпроцесс</p>
                    <p id="techprocess">{products[0].techprocess}</p>
                </div>
            </div>
            <div className={productPage.videomemorySpecifications}>
                <h6>Спецификации видеопамяти</h6>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Объем видеопамяти</p>
                    <p id="videomemorySize">{products[0].videomemorySize}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Тип памяти</p>
                    <p id="videomemoryType">{products[0].videomemoryType}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Разрядность шины памяти</p>
                    <p id="videomemoryСapacity">{products[0].videomemoryCapacity}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Максимальная пропускная способность памяти</p>
                    <p id="videomemorySpeed">{products[0].videomemorySpeed}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Эффективная частота памяти</p>
                    <p id="videomemoryFrequency">{products[0].videomemoryFrequency}</p>
                </div>
            </div>
        </div>
    );
}

export default MainParameters;