import React from 'react';

import './CopyrightBorder.scss';

const CopyrightBorder = ({addedClasses = ''}) => (
    <div className = {` copyrightBorder ${addedClasses}`}>
        <hr className = 'copyrightBorder__rule'/>
        <span className = 'copyrightBorder__text'>© 2020 The Encounter Worship Center. All rights reserved</span>
    </div>
);

export default CopyrightBorder;
