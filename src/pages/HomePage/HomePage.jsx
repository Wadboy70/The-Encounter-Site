import React from 'react';

import Slideshow from '../../containers/Slideshow/Slideshow';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';
import DisplaySection from '../../containers/DisplaySection/DisplaySection';
import ParticleBG from '../../components/ParticleBG/ParticleBG';

import './HomePage.scss';

const HomePage = () => {
    return(
        <>
            <Slideshow interval = {9000}/>
            <WelcomeSection/>
            <DisplaySection/>
            <ParticleBG/>
        </>
    );
};

export default HomePage;
