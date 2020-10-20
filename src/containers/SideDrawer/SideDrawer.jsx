import React from 'react';

import { Link } from 'react-router-dom';

import './SideDrawer.scss';

const SideDrawer = ({drawerToggleHandler, drawerOpen}) => (
    <nav className = {`sideNav ${drawerOpen ? 'shown' : 'hiddenNav'}`}>
        <button onClick = {()=> {
            console.log(drawerToggleHandler)
            drawerToggleHandler()
        }}>
            ✖
        </button>
        <ul>
            <li>
                <Link to = 'Home'>Home</Link>
            </li>
            <li>
                <Link to = 'About'>About</Link>
            </li>
        </ul>
    </nav>
);
export default SideDrawer;