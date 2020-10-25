import React from 'react';

import Slideshow from '../../containers/Slideshow/Slideshow';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';
import DisplaySection from '../../containers/DisplaySection/DisplaySection';

import './HomePage.scss';

const HomePage = () => {
    return(
        <>
            <Slideshow interval = {9000}/>
            <WelcomeSection/>
            <DisplaySection/>
        </>
    );
};

export default HomePage;
