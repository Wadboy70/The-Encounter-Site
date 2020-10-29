import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import ClosingBox from '../../components/ClosingBox/ClosingBox';
import Button from '../../components/Button/Button';

import arthur from '../../utils/images/arthurHeadshot.jpg';
import {ReactComponent as Facebook} from '../../utils/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../utils/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../utils/images/Youtube.svg';
import {ReactComponent as Phone} from '../../utils/images/phone.svg';

import './ClosingSection.scss';

const ClosingSection = () => (
    <ParticleBG className = 'closingSection'>
        <ClosingBox 
            className = 'closingSection__connect' 
            title = 'Connect'
        >
            <div className = 'closingSection__icon'>
                <Phone />
            </div>
            <span>Contact Us</span>
            <div className = 'closingSection__icon'>
                <Facebook />
            </div>
            <span>Facebook</span>
            <div className = 'closingSection__icon'>
                <Instagram />
            </div>
            <span>Instagram</span>
            <div className = 'closingSection__icon'>
                <Youtube />
            </div>
            <span>Youtube</span>
        </ClosingBox>
        <ClosingBox 
            className = 'closingSection__about' 
            title = 'About' 
            backingImage = {arthur}
        >
            <p>Read about the leaders of our ministry!</p>
            <Button className = 'medium yellowBG' link = '/about'>Read More</Button>
        </ClosingBox>
    </ParticleBG>
)
export default ClosingSection;