import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

import './SideDrawer.scss';

const SideDrawer = ({drawerToggleHandler, drawerOpen}) => (
    <div className = {`sideNav ${drawerOpen ? '' : 'hiddenNav'}`}>
        <div className = ''>
            <Button 
                op = {drawerToggleHandler}
                addedClass = 'whiteFont transparent closeSidebarButton'
            >
                ✖
            </Button> 
        </div>
        <nav >
            
            <ul>
                <li>
                    <Link to = 'Home'>Home</Link>
                </li>
                <li>
                    <Link to = 'About'>About</Link>
                </li>
            </ul>
        </nav>
    </div>
);
export default SideDrawer;