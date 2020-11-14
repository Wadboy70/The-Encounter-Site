import React from 'react';
import ParticleBG from '../../components/ParticleBG/ParticleBG';
import worshipHands from '../../assets/images/worshipHands.jpg';

import './AboutWelcomeSection.scss';

const AboutWelcomeSection = () => {

    return(
        <ParticleBG 
            className = 'aboutWelcomeSection' 
            particleClassName = 'aboutWelcomeSection__particles'
        >
            <h1 className = 'aboutWelcomeSection__title'>ABOUT US</h1>
            <img src={worshipHands} alt="worshipHands" className = 'aboutWelcomeSection__worshipHands'/>
            <h2 className = 'aboutWelcomeSection__mainText'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing</span> elit, sed do eiusmod tempor incididunt</h2>
            <h3 className = 'aboutWelcomeSection__subText'>Nunc non blandit massa enim nec dui. Pellentesque habitant morbi tristique senectus et netus et. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. </h3>
        </ParticleBG>
    );
};

export default AboutWelcomeSection;