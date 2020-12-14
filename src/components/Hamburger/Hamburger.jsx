import React from 'react';

import './Hamburger.scss';

const Hamburger = ({op = () => {}, className = ''}) => (
    <button className = {`hamburger ${className}`} onClick = {op}>
        <span/>
        <span/>
        <span/>
    </button>
);

export default Hamburger;