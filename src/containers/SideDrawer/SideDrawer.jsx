import React, { useContext } from 'react';

import Button from '../../components/Button/Button';
import { ReactComponent as AboutIcon } from '../../assets/images/Info.svg'
import { ReactComponent as StreamIcon } from '../../assets/images/computer.svg'
import { ReactComponent as CalendarIcon } from '../../assets/images/calendar.svg'
import { ReactComponent as PrayerIcon } from '../../assets/images/bible.svg'
import { ReactComponent as ContactIcon } from '../../assets/images/phone.svg'
import { ReactComponent as HomeIcon } from '../../assets/images/home.svg'
import CopyrightBorder from '../../components/CopyrightBorder/CopyrightBorder';

import './SideDrawer.css';
import ROUTES from '../../utils/routes';
import SignInSignOutButton from '../../components/SignInSignOutButton/SignInSignOutButton';
import { FirebaseUserContext } from '../../utils/context/user.context';
import USER_TIERS from '../../utils/constants/userTiers';

const SideDrawer = ({drawerToggleHandler, drawerOpen}) => {
    const [user] = useContext(FirebaseUserContext);
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
            <ul className = 'sideNav__pageList'>
                {
                    Object.keys(ROUTES).map((routeName, index) => {
                        let route = ROUTES[routeName];
                        return(
                            index > 7 + ((user?.tier === USER_TIERS.ADMIN) ? 0 : 1) &&
                            <li key = {index} className = 'pageList__pageItem changeColorOnHover'> 
                                <Button link = {route.url} className = 'transparent pageList__pageLink'>{route.name}</Button>
                            </li>
                    )})
                }
            </ul>
            <CopyrightBorder className = 'sideNav__bottomBorder'/>
        </div>
    );
};
export default SideDrawer;