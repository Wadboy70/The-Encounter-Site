import React from 'react';

import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';
import Logo from '../../components/Logo/Logo';
import Social from '../../components/Social/Social';

import './Footer.scss';
import Button from '../../components/Button/Button';
import ROUTES from '../../utils/routes';

const Footer = () => (
    <footer className = 'footer'>
        <Logo className = 'footer__logo'/>
        <Social className = 'footer__social'/>
        <Button 
            className = 'footer__nav transparent whiteBorder medium'
            link = {ROUTES.CONTACT_US.url}
        >Contact</Button>
        <CopyrightBorder className = 'footer__border'/>
    </footer>
);

export default Footer;
