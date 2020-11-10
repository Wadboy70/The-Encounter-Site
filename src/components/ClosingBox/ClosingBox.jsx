import React from 'react';

import './ClosingBox.scss';

const ClosingBox = ({children, title = '', backingImage, className = ''}) => (
    <div className = {`closingBox ${className}`} style = {backingImage ? {backgroundImage:`url(${backingImage})`} : {}}>
        <h1 className = 'closingBox__title underlineTitle'>{title}</h1>
        <div className = 'closingBox__content'>
            {children}
        </div>
    </div>
);

export default ClosingBox;