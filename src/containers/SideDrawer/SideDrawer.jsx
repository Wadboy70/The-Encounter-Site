import React from 'react';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import { ReactComponent as AboutIcon } from '../../assets/images/Info.svg'
import { ReactComponent as StreamIcon } from '../../assets/images/computer.svg'
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg'
import { ReactComponent as PrayerIcon } from '../../assets/images/bible.svg'
import { ReactComponent as ContactIcon } from '../../assets/images/phone.svg'
import { ReactComponent as HomeIcon } from '../../assets/images/home.svg'
import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';

import './SideDrawer.scss';
import ROUTES from '../../utils/routes';
import SignInSignOutButton from '../../components/SignInSignOutButton/SignInSignOutButton';

const SideDrawer = ({drawerToggleHandler, drawerOpen}) => {
    const iconValues = [
        {
            info: ROUTES.HOME,
            icon: <HomeIcon/>
        },
        {
            info: ROUTES.ABOUT,
            icon:  <AboutIcon/>
        },
        {
            info: ROUTES.LIVE_SERMONS,
            icon: <StreamIcon/>
        },
        {
            info: ROUTES.CALENDAR,
            icon: <CalendarIcon/>
        },
        {
            info: ROUTES.PRAYER_REQUESTS,
            icon: <PrayerIcon/>
        },
        {
            info: ROUTES.CONTACT_US,
            icon: <ContactIcon/>
        }
    ];
    return(
        <div className = {`sideNav scrollbar ${drawerOpen ? '' : 'hiddenNav'}`}>
            <div className = 'sideNav__topBar'>
                <SignInSignOutButton className = 'topBar__signIn'/>
                <Button 
                    op = {drawerToggleHandler}
                    className = 'whiteFont transparent sideNav__cross'
                >
                    ✕
                </Button> 
            </div>
            <div className = 'sideNav__nav'>
                {
                    iconValues.map((val, index) => (
                        <Button 
                            key = {index} 
                            link = {val.info.url} 
                            className = 'nav__button'
                        >
                            <div className = 'nav__icon'>
                                {val.icon}
                            </div>
                            <span className = 'nav__name'>{val.info.name}</span>
                        </Button>
                    ))
                }
            </div>
            <CopyrightBorder className = 'sideNav__bottomBorder'/>
        </div>
    );
};
export default SideDrawer;