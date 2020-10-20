import React from 'react';

import { Link } from 'react-router-dom';
import Hamburger from '../../components/Hamburger/Hamburger';

import './Navigation.scss';
const Navigation = ({drawerToggleHandler}) => {
    return (
        <header className = 'navigation'>
            <nav className = 'navigation__nav'>
                <div className = 'nav__logo'>
                    <Link to = 'home'>Logo</Link>
                </div>
                <div className = 'nav__items'>
                    <ul>
                        <li>
                            <Link to = 'Home'>Home</Link>
                        </li>
                        <li>
                            <Link to = 'About'>About</Link>
                        </li>
                        <li>
                            <Link to = 'LiveSermons'>Live Sermons</Link>
                        </li>
                        <li>
                            <Link to = 'Calendar'>Calendar</Link>
                        </li>
                        <li>
                            <Link to = 'PrayerRequests'>Prayer Requests</Link>
                        </li>
                    </ul>
                </div>
                
                <Hamburger op = {drawerToggleHandler}/>
            </nav>
        </header>
    );
};

export default Navigation;