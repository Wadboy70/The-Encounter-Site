import React from 'react';

import {Link} from 'react-router-dom';
import { siteMap } from '../../utils/routes';
import SignInSignOutButton from '../SignInSignOutButton/SignInSignOutButton';

import './Nav.css';

const Nav = ({className = ''}) => {
    return(
        <nav className = {`nav ${className}`}>
            <ul>
                {
                    siteMap.map((site, index) => {
                        return(
                            <li key = {index}>
                                <Link to = {site.url}>
                                    {site.name}
                                </Link>
                            </li>
                        )
                    })
                }
                <SignInSignOutButton/>                
            </ul>
        </nav>
    );
};
export default Nav;