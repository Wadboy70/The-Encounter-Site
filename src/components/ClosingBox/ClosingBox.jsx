import React from 'react';

import './ClosingBox.scss';

const ClosingBox = ({children, title = '', backingImage, className = ''}) => (
    <div className = {`closingBox ${className}`} style = {{backgroundImage:`url(${backingImage})`}}>
        <h1 className = 'closingBox__title'>{title}</h1>
        {children}
    </div>
);

export default ClosingBox;