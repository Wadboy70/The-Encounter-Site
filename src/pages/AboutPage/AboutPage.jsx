import React from 'react';

import AboutPastorSection from '../../containers/AboutPastorSection/AboutPastorSection';
import AboutLeadershipSection from '../../containers/AboutLeadershipSection/AboutLeadershipSection';
import AboutInfoSection from '../../containers/AboutInfoSection/AboutInfoSection';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import imageUrls from '../../assets/imageUrls'

import './AboutPage.scss';

const AboutPage = () => {
    
    return(
        <div className = 'aboutPage'>
            <Jumbotron
                image = { imageUrls.worshipPerson }
                title = 'About Us'
            />
            <AboutInfoSection/>
            <AboutPastorSection/>
            <AboutLeadershipSection/>
        </div>
    );
};


export default AboutPage;