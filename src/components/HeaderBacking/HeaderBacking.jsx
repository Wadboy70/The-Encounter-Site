import React from 'react';

import { ReactComponent as Backing } from '../../utils/images/yellowBacking.svg';

import './HeaderBacking.scss';

const HeaderBacking = ({children, addedClass = ''}) => (
    <div className = {`backing ${addedClass}`}>
        <Backing  className = 'backing__bg'/>
        <h2 className = 'backing__title'>
            {children}
        </h2>
    </div>
);

export default HeaderBacking;