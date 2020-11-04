import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import { SiteMapContext } from '../../utils/context/route.context';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { signOut } from '../../utils/firebase';
import Button from '../../components/Button/Button';
import * as ROUTES from '../../utils/routes';

import './Nav.scss';

const Nav = ({className = '', children}) => {
    const siteMap = useContext(SiteMapContext);
    const [user, setUser] = useContext(FirebaseUserContext);
    const endSession = () => {
        signOut();
        setUser(null);
    };
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
                    {
                        user ? 
                        <Button 
                            className = 'transparent whiteBorder small'
                            op = {endSession}
                        >
                            Sign Out
                        </Button>
                        :
                        <Button 
                            className = 'transparent whiteBorder small'
                            link = {ROUTES.SIGN_IN_SIGN_UP.url}
                        >
                            Sign In
                        </Button>
                    }
                    
                </ul>
            </div>
        </nav>
    );
};
export default Nav;