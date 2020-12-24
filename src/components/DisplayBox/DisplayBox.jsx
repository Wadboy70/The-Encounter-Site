import React from 'react';
import Button from '../Button/Button';

import './DisplayBox.scss';

const DisplayBox = ({
    className = '',
    title,
    button, 
    image,
    description, 
    buttonProps = {},
    pos = 'center',
    cover,
    center,
    justifyCenter
}) => {
    return(
        <div className = {`displayBox ${className} ${cover && 'cover'}`} style = {image ? {backgroundImage: `url(${image})`, backgroundPosition: pos} : undefined}>
            <div className = {`displayBox__bg ${center ? 'center' : ''} ${justifyCenter ? 'justifyCenter' : ''}`}>
                {
                    title &&
                    <h2 className = 'displayBox__title'>{title}</h2>
                }
                {
                    description &&
                    <p className = 'displayBox__description'>{description}</p>
                }
                {
                    button  &&
                    <Button {...buttonProps} className = 'displayBox__button medium yellowBG'>{button}</Button>
                }
            </div>
        </div>
    );
};

export default DisplayBox;