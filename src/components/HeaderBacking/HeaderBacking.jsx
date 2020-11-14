import React from 'react';

import { ReactComponent as Backing } from '../../assets/images/yellowBacking.svg';

import './HeaderBacking.scss';

const HeaderBacking = ({children, className = ''}) => (
    <div className = {`backing ${className}`}>
        <Backing  className = 'backing__bg'/>
        <h2 className = 'backing__title'>
            {children}
        </h2>
    </div>
);

export default HeaderBacking;