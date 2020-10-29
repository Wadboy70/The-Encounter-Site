import React from 'react';

import {Link} from 'react-router-dom';

import './Nav.scss';

const Nav = ({className = '', siteMap = ['About', 'Live Sermon', 'Calendar', 'Prayer Request', 'Contact Us'], children}) => (
    <nav className = {`nav ${className}`}>
        {children}
        <div className = 'nav__items'>
            <ul>
                {
                    siteMap.map((site, index) => {
                        return(
                            <li key = {index}>
                                <Link to = {site.replace(/ /g, "")}>
                                    {site}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </nav>
);

export default Nav;