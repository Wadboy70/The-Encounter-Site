import React from 'react';

import './HighlightSection.scss';

const HighlightSection = ({
    children,
    backgroundPhoto
}) => (
    <div className = 'highlight'>
            <div className = 'highlight__photo' style = {{backgroundImage: `url(${backgroundPhoto})`}}>
                <div className = 'highlight__background'></div>
            </div>
            {children}
    </div>

);

export default HighlightSection;
