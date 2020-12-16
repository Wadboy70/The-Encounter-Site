import React from 'react';
import Button from '../Button/Button';

import './DisplayBox.scss';

const DisplayBox = ({
    className = '',
    title,
    button, 
    image,
    description, 
    buttonProps = {}
}) => {
    return(
        <div className = {`displayBox ${className}`} style = {image ? {backgroundImage: `url(${image})`} : undefined}>
            <div className = 'displayBox__bg'>
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
                    <Button {...buttonProps} className = 'displayBox__button small yellowBG'>{button}</Button>
                }
            </div>
        </div>
    );
};

export default DisplayBox;