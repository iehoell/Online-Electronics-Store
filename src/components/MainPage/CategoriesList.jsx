import React from 'react';
import mainPage from "./MainPage.module.scss";

function CategoriesList(props) {
    return(
        <div>
            <li className={mainPage.listItem}>
                <a className={mainPage.categoriesItem}
                   href="/">
                    {props.text}
                </a>
            </li>
        </div>
    );
}

export default CategoriesList;