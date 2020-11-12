import React from 'react';

import Button from '../Button/Button';

import './DisplayItem.scss';

const DisplayItem = ({info = {}, className = ''}) => {
    const {icon, title, button, content} = info;
    return(
        <div className = {`displayItem ${className}`}>
            {
                icon && 
                <img src={icon} alt={title} className = 'displayItem__icon'/>
            }
            <h1 className = 'displayItem__title underlineTitle'>{ title }</h1>
            <p className = 'displayItem__content'>{ content }</p>
            {
                button &&
                <Button className = 'displayItem__button small yellowBG'>{button}</Button>
            }
        </div>
    );
};

export default DisplayItem;