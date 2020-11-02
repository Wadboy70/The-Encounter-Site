import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import { SiteMapContext } from '../../utils/context/route.context';

import './Nav.scss';

const Nav = ({className = '', children}) => {
    const siteMap = useContext(SiteMapContext);
    return(
        <nav className = {`nav ${className}`}>
            {children}
            <div className = 'nav__items'>
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
                </ul>
            </div>
        </nav>
    );
};

export default Nav;