import React from 'react';

import Slideshow from '../../containers/Slideshow/Slideshow';
import HomeWelcomeSection from '../../containers/HomeWelcomeSection/HomeWelcomeSection';
import DisplaySection from '../../containers/DisplaySection/DisplaySection';
import ClosingSection from '../../containers/ClosingSection/ClosingSection';

import './HomePage.scss';
import HomeEventSection from '../../containers/HomeEventSection/HomeEventSection';

const HomePage = () => (
    <div className = 'homepage'>
        <Slideshow interval = {9000}/>
        <HomeWelcomeSection/>
        <DisplaySection/>
        <HomeEventSection/>
        <ClosingSection/>
    </div>
);

export default HomePage;
