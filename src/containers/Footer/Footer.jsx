import React from 'react';

import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';
import Logo from '../../components/Logo/Logo';
import Social from '../../components/Social/Social';

import './Footer.scss';

const Footer = () => (
    <footer className = 'footer'>
        <Logo className = 'footer__logo'/>
        <Social className = 'footer__social'/>
        <CopyrightBorder className = 'footer__border'/>
    </footer>
);

export default Footer;
