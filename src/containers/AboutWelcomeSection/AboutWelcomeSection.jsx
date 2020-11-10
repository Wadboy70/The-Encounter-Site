import React from 'react';
import ParticleBG from '../../components/ParticleBG/ParticleBG';
import worshipHands from '../../assets/images/worshipHands.jpg';

import './AboutWelcomeSection.scss';

const AboutWelcomeSection = () => {

    return(
        <ParticleBG 
            className = 'aboutPage__intro' 
            particleClassName = 'aboutPage__particles'
        >
            <h1>ABOUT US</h1>
            <div className = 'intro__mainText'></div>
            <div className = 'intro__subText'></div>
            <img src={worshipHands} alt="worshipHands" className = 'intro__worshipHands'/>
        </ParticleBG>
    );
};

export default AboutWelcomeSection;