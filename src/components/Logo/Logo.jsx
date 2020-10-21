import React from 'react';

import {Link} from 'react-router-dom';
import logo from '../../utils/images/rainbowLionCut.png';

import './Logo.scss';

const Logo = ({addedClass = ''}) => (
    <div className = {`logo ${addedClass}`}>
        <Link to = 'home'>
            <img 
            src = {logo}
            alt = 'encounter logo'/>
        </Link>
        <div>
            <span>The Encounter</span>
            <span>Worship Center</span>
        </div>
    </div>
);

export default Logo;