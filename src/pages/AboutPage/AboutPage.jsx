import React from 'react';

import AboutWelcomeSection from '../../containers/AboutWelcomeSection/AboutWelcomeSection';
import AboutPastorSection from '../../containers/AboutPastorSection/AboutPastorSection';

import './AboutPage.scss';

const AboutPage = () => {
    
    return(
        <div className = 'aboutPage'>
            <AboutWelcomeSection/>
            <AboutPastorSection/>
            {/* <AboutLeadershipSection/> */}
        </div>
    );
};

export default AboutPage;