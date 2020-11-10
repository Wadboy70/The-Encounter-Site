import React from 'react';

import Nav from "../../components/Nav/Nav";
import Hamburger from '../../components/Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';

import './Navigation.scss';
const Navigation = ({drawerToggleHandler}) => {
    return (
        <header className = 'navigation'>
            <Nav className = 'navigation__homeNav'>
                <Logo className =  'homeNav__logo'/>
                <Hamburger op = {drawerToggleHandler}/>
            </Nav>
        </header>
    );
};

export default Navigation;