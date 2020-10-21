import React from 'react';

import {Link} from 'react-router-dom';

import './Nav.scss';

const Nav = ({addedClasses = '', siteMap = [], children}) => (
    <nav className = {`nav ${addedClasses}`}>
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