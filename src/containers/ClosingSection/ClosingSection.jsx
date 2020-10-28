import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import ClosingBox from '../../components/ClosingBox/ClosingBox';

import arthur from '../../utils/images/arthurHeadshot.jpg';
import {ReactComponent as Facebook} from '../../utils/images/Facebook.svg';
import {ReactComponent as Instagram} from '../../utils/images/Instagram.svg';
import {ReactComponent as Youtube} from '../../utils/images/Youtube.svg';
import {ReactComponent as Phone} from '../../utils/images/phone.svg';

import './ClosingSection.scss';

const ClosingSection = () => (
    <ParticleBG className = 'closingSection'>
        <ClosingBox className = 'closingSection__connect' title = 'Connect'>
            <Phone/>
            <span>Contact Us</span>
            <Facebook/>
            <span>Facbebook</span>
            <Instagram/>
            <span>Instagram</span>
            <Youtube/>
            <span>Youtube</span>
        </ClosingBox>
        <ClosingBox className = 'closingSection__about' title = 'About' backingImage = {arthur}/>
    </ParticleBG>
)
export default ClosingSection;