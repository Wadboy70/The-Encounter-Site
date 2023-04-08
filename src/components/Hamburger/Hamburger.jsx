import React from 'react';

import './Hamburger.css';

const Hamburger = ({op = () => {}, className = ''}) => (
    <button className = {`hamburger ${className}`} onClick = {op} aria-label = 'hamburger'>
        <span/>
        <span/>
        <span/>
    </button>
);

export default Hamburger;