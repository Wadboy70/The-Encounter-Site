import React from 'react';

import './Hamburger.scss';

const Hamburger = ({op = () => {}, addedClasses = ''}) => (
    <button className = {`hamburger ${addedClasses}`} onClick = {op}>
        <span/>
        <span/>
        <span/>
    </button>
);

export default Hamburger;