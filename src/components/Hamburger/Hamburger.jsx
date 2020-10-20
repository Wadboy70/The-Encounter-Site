import React from 'react';

import './Hamburger.scss';

const Hamburger = ({op = () => {}}) => (
    <button className = 'hamburger' onClick = {op}>
        <span/>
        <span/>
        <span/>
    </button>
);

export default Hamburger;