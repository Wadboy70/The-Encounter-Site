import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

import './SideDrawer.scss';

const SideDrawer = ({drawerToggleHandler, drawerOpen, siteMap}) => (
    <div className = {`sideNav ${drawerOpen ? '' : 'hiddenNav'}`}>
        <Logo addedClass = 'sideNav__logo'/>
        <Button 
            op = {drawerToggleHandler}
            addedClass = 'whiteFont transparent sideNav__cross'
        >
            ✖
        </Button> 
        <Nav siteMap = {siteMap} addedClasses = 'sideNav__nav'>
            <h1>Pages</h1>
        </Nav>
        <div className = 'sideNav__social'>

        </div>
        <div className = 'sideNav__bottomBorder'>

        </div>
    </div>
);
export default SideDrawer;