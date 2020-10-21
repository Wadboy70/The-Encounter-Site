import React from 'react';

import { Link } from 'react-router-dom';
import Nav from "../../components/Nav/Nav";
import Hamburger from '../../components/Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';

import './Navigation.scss';
const Navigation = ({drawerToggleHandler, siteMap = []}) => {
    return (
        <header className = 'navigation'>
            <Nav siteMap = {siteMap} addedClasses = 'navigation__homeNav'>
                <Logo/>
            <Hamburger op = {drawerToggleHandler}/>

            </Nav>
        </header>
    );
};

export default Navigation;