import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import ClosingBox from '../../components/ClosingBox/ClosingBox';
import Button from '../../components/Button/Button';

import arthur from '../../assets/images/arthurHeadshot.jpg';
import {ReactComponent as Facebook} from '../../assets/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../assets/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../assets/images/Youtube.svg';
import {ReactComponent as Phone} from '../../assets/images/phone.svg';
import socialMediaLinks from '../../utils/constants/socialMediaLinks';

import './ClosingSection.scss';

const ClosingSection = () => (
    <ParticleBG className = 'closingSection' particleClassName = 'closingSectionParticles'>
        <ClosingBox 
            className = 'closingSection__connect' 
            title = 'Connect'
        >
            <Button className = 'closingSection__icon transparent' link = '/contact'>
                <Phone />
                <span>Contact Us</span>
            </Button>
            <Button className = 'closingSection__icon transparent' anchor = {socialMediaLinks.facebook}>
                <Facebook />
                <span>Facebook</span>
            </Button>
            <Button className = 'closingSection__icon transparent' anchor = {socialMediaLinks.youtube}>
                <Youtube />
                <span>Youtube</span>
            </Button>
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