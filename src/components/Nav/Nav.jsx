import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { signOut } from '../../utils/firebase';
import Button from '../../components/Button/Button';
import ROUTES, { siteMap } from '../../utils/routes';

import './Nav.scss';

const Nav = ({className = ''}) => {
    const [user, setUser] = useContext(FirebaseUserContext);
    const endSession = () => {
        signOut();
        setUser(null);
    };
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
                {
                    user ? 
                    <Button 
                        className = 'transparent whiteBorder small nav__button'
                        op = {endSession}
                    >
                        Sign Out
                    </Button>
                    :
                    <Button 
                        className = 'transparent whiteBorder small nav__button'
                        link = {ROUTES.SIGN_IN_SIGN_UP.url}
                    >
                        Sign In
                    </Button>
                }                
            </ul>
        </nav>
    );
};
export default Nav;