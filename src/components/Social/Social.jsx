import React from 'react';
import {ReactComponent as Facebook} from '../../assets/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../assets/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../assets/images/Youtube.svg';

import './Social.scss';

const Social = ({className = ''}) => (
    <div className = {`socialList ${className}`}>
        <h1 className = 'socialList__title'>Follow Us!</h1>
        <div className = 'socialList__logos'>
            <Facebook/>
            <Youtube/>
            <Instagram/>
        </div>
    </div>
);

export default Social;