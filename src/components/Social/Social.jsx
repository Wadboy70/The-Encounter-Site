import React from 'react';

import {ReactComponent as Facebook} from '../../assets/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../assets/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../assets/images/Youtube.svg';
import Button from '../Button/Button';

import './Social.scss';

const Social = ({className = ''}) => (
    <div className = {`socialList ${className}`}>
        <h1 className = 'socialList__title'>Follow Us</h1>
        <div className = 'socialList__logos'>
            <Button anchor = 'https://www.facebook.com/TheEncounterWorshipCenter' className = 'transparent' aria-label='facebook'>
                <Facebook/>
            </Button>
            <Button anchor = 'https://www.youtube.com/user/arthurhintonmusic' className = 'transparent' aria-label='youtube'>
                <Youtube/>
            </Button>
            <Button anchor = 'https://instagram.com' className = 'transparent' aria-label='instagram'>
                <Instagram/>
            </Button>
        </div>
    </div>
);

export default Social;