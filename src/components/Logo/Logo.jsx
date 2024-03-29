import React from 'react';

import {Link} from 'react-router-dom';
import logo from '../../assets/images/rainbowLionCut.png';

import './Logo.css';

const Logo = ({className = '', op = () => {}}) => (
    <div className = {`logo ${className}`} onClick = {op}>
        <Link to = '/'>
            <img 
            src = {logo}
            alt = 'encounter logo'/>
        <div>
            <span>The Encounter</span>
            <span>Worship Center</span>
        </div>
        </Link>
    </div>
);

export default Logo;