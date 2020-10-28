import React from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';

import './HighlightSection.scss';

const HighlightSection = ({
    info,
    backgroundPhoto
}) => (
    <div className = 'highlight'>
            <div className = 'highlight__photo' style = {{backgroundImage: `url(${backgroundPhoto})`}}>
            <div className = 'highlight__background'></div></div>
        <DisplayItem info = {info} className = 'highlight__display'/>
    </div>

);

export default HighlightSection;
