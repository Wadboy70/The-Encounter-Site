import React from 'react';

import './HighlightSection.css';

const HighlightSection = ({
    children,
    backgroundPhoto,
    className = ''
}) => (
    <div className = {`highlight ${className}`}>
            <div className = 'highlight__photo' style = {{backgroundImage: `url(${backgroundPhoto})`}}>
                <div className = 'highlight__background'></div>
            </div>
            {children}
    </div>

);

export default HighlightSection;
