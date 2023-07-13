import productPage from '../productPage.module.scss'
import React from 'react';
let products = require('../../../mockData/products.json');

function MainParameters(){
    return(
        <div className={productPage.characteristics}>
            <div className={productPage.commonParameters}>
                <h6>Общие параметры</h6>
                <div className={productPage.commonParameters__item}>
                    <p>Тип </p>
                    <p id="type">{products.product1.type}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Модель</p>
                    <p id="model">{products.product1.model}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Код производителя</p>
                    <p id="code">{products.product1.code}</p>
                </div>
                <div className={productPage.commonParameters__item}>
                    <p>Цвет</p>
                    <p id="color">{products.product1.color}</p>
                </div>
            </div>
            <div className={productPage.mainParameters}>
                <h6>Основные параметры</h6>
                <div className={productPage.mainParameters__item}>
                    <p>Графический процессор</p>
                    <p id="graphic">{products.product1.graphic}</p>
                </div>
                <div className={productPage.mainParameters__item}>
                    <p>Микроархитектура</p>
                    <p id="microarchitecture">{products.product1.microarchitecture}</p>
                </div>
                <div className={productPage.mainParameters__item}>
                    <p>Техпроцесс</p>
                    <p id="techprocess">{products.product1.techprocess}</p>
                </div>
            </div>
            <div className={productPage.videomemorySpecifications}>
                <h6>Спецификации видеопамяти</h6>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Объем видеопамяти</p>
                    <p id="videomemorySize">{products.product1.videomemorySize}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Тип памяти</p>
                    <p id="videomemoryType">{products.product1.videomemoryType}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Разрядность шины памяти</p>
                    <p id="videomemoryСapacity">{products.product1.videomemoryCapacity}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Максимальная пропускная способность памяти</p>
                    <p id="videomemorySpeed">{products.product1.videomemorySpeed}</p>
                </div>
                <div className={productPage.videomemorySpecifications__item}>
                    <p>Эффективная частота памяти</p>
                    <p id="videomemoryFrequency">{products.product1.videomemoryFrequency}</p>
                </div>
            </div>
        </div>
    );
}

export default MainParameters;