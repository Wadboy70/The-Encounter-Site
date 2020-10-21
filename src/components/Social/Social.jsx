import React from 'react';
import {ReactComponent as Facebook} from '../../utils/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../utils/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../utils/images/Youtube.svg';

import './Social.scss';

const Social = ({addedClasses = ''}) => (
    <div className = {`socialList ${addedClasses}`}>
        <h1 className = 'socialList__title'>Follow Us!</h1>
        <div className = 'socialList__logos'>
            <Facebook/>
            <Youtube/>
            <Instagram/>
        </div>
    </div>
);

export default Social;