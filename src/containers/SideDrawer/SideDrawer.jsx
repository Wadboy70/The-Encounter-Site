import React from 'react';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';
import Social from '../../components/Social/Social';
import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';

import './SideDrawer.scss';

const SideDrawer = ({drawerToggleHandler, drawerOpen, siteMap}) => (
    <div className = {`sideNav ${drawerOpen ? '' : 'hiddenNav'}`}>
        <Logo addedClass = 'sideNav__logo' op = {drawerToggleHandler}/>
        <Button 
            op = {drawerToggleHandler}
            addedClass = 'whiteFont transparent sideNav__cross'
        >
            ✖
        </Button> 
        <Nav siteMap = {siteMap} addedClasses = 'sideNav__nav'>
            <h1>Pages</h1>
        </Nav>
        <Social className = 'sideNav__social'/>
        <CopyrightBorder addedClasses = 'sideNav__bottomBorder'/>
    </div>
);
export default SideDrawer;