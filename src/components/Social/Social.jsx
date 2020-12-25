import React from 'react';

import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import  Youtube from '../../assets/images/youtube.png';
import Button from '../Button/Button';

import './Social.scss';

const Social = ({className = ''}) => (
    <div className = {`socialList ${className}`}>
        <h1 className = 'socialList__title'>Follow Us</h1>
        <div className = 'socialList__logos'>
            <Button anchor = 'https://www.facebook.com/TheEncounterWorshipCenter' className = 'transparent' aria-label='facebook'>
                <img src={ Facebook } alt="Facebook"/>
            </Button>
            <Button anchor = 'https://www.youtube.com/user/arthurhintonmusic' className = 'transparent' aria-label='youtube'>
                <img src={ Youtube } alt="Youtube"/>
            </Button>
            <Button anchor = 'https://instagram.com' className = 'transparent' aria-label='instagram'>
                <img src={ Instagram } alt="Instagram" className = 'instagramSocial'/>
            </Button>
        </div>
    </div>
);

export default Social;