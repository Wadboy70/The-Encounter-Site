import React from 'react';

import {ReactComponent as Facebook} from '../../assets/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../assets/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../assets/images/Youtube.svg';
import Button from '../Button/Button';
import socialMediaLinks from '../../utils/constants/socialMediaLinks';

import './Social.scss';

const Social = ({className = ''}) => (
    <div className = {`socialList ${className}`}>
        <h1 className = 'socialList__title'>Follow Us!</h1>
        <div className = 'socialList__logos'>
            <Button anchor = {socialMediaLinks.facebook} className = 'transparent'>
                <Facebook/>
            </Button>
            <Button anchor = {socialMediaLinks.youtube} className = 'transparent'>
                <Youtube/>
            </Button>
            <Button anchor = {socialMediaLinks.instagram} className = 'transparent'>
                <Instagram/>
            </Button>
        </div>
    </div>
);

export default Social;