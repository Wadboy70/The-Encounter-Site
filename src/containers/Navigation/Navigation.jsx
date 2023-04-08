import React from 'react';

import Nav from "../../components/Nav/Nav";
import Hamburger from '../../components/Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';

import './Navigation.css';
const Navigation = ({drawerToggleHandler}) => {
    return (
        <header className = 'navigation'>
            <Logo className =  'navigation__logo'/>
            <div className = 'navigation__right'>
                <Nav className = 'navigation__homeNav'>
                </Nav>
                <Hamburger 
                    className = 'navigation__hamburger'
                    op = {drawerToggleHandler}/>
            </div>
        </header>
    );
};

export default Navigation;