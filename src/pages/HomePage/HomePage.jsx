import React from 'react';

import Slideshow from '../../containers/Slideshow/Slideshow';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';
import DisplaySection from '../../containers/DisplaySection/DisplaySection';
import HighlightSection from '../../containers/HighlightSection/HighlightSection';
import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Calendar from '../../utils/images/calendar.svg';
import Planner from '../../utils/images/planner.png';

import './HomePage.scss';

const HomePage = () => (
    <div className = 'homepage'>
        <Slideshow interval = {9000}/>
        <WelcomeSection/>
        <DisplaySection/>
        <HighlightSection info = {{
            icon: Calendar,
            title: 'Upcoming Event',
            content: `October 19th at 5pm\nZoom Call\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
            button: 'See Calendar'
            }}
            backgroundPhoto = {Planner}
            />
        <ParticleBG/>
    </div>
);

export default HomePage;
