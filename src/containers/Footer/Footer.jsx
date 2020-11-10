import React from 'react';

import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';
import Logo from '../../components/Logo/Logo';
import Social from '../../components/Social/Social';
import Nav from '../../components/Nav/Nav';

import './Footer.scss';

const Footer = () => (
    <footer className = 'footer'>
        <Logo className = 'footer__logo'/>
        <Social className = 'footer__social'/>
        <div className = 'footer__nav'>
            <h2 className = 'footer__nav__title'>Pages</h2>
            <Nav/>
        </div>
        <CopyrightBorder className = 'footer__border'/>
    </footer>
);

export default Footer;
