import React from 'react';

import Button from '../Button/Button';

import './DisplayItem.scss';

const DisplayItem = ({info}) => {
    const {icon, title, button, content} = info;
    return(
        <div className = 'displayItem'>
            <img src={icon} alt={title} className = 'displayItem__icon'/>
            <h1 className = 'displayItem__title'>{ title }</h1>
            <p className = 'displayItem__content'>{ content }</p>
            <Button addedClass = 'displayItem__button small yellowBG'>{button}</Button>
        </div>
    );
};

export default DisplayItem;