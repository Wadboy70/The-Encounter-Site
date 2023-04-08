import React from 'react';

import Button from '../Button/Button';

import './DisplayItem.css';

const DisplayItem = ({info = {}, className = '', children}) => {
    const {icon, title, button, buttonProps} = info;
    return(
        <div className = {`displayItem ${className}`}>
            {
                icon && 
                <img src={icon} alt={title} className = 'displayItem__icon'/>
            }
            <h1 className = 'displayItem__title underlineTitle'>{ title }</h1>
            <div className = 'displayItem__content'>{ children }</div>
            {
                button &&
                <Button 
                    className = 'displayItem__button medium yellowBG' 
                    {...buttonProps}
                >
                    {button}
                </Button>
            }
        </div>
    );
};

export default DisplayItem;