import React from 'react';

import './CopyrightBorder.css';

const CopyrightBorder = ({className = ''}) => (
    <div className = {` copyrightBorder ${className}`}>
        <hr className = 'copyrightBorder__rule'/>
        <span className = 'copyrightBorder__text'>© 2020 The Encounter Worship Center. All rights reserved</span>
    </div>
);

export default CopyrightBorder;
