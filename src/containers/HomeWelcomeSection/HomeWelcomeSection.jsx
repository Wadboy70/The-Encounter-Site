import React from 'react';

import HeaderBacking from '../../components/HeaderBacking/HeaderBacking';
import Button from '../../components/Button/Button';
import arthurSitting from '../../assets/images/arthurStanding.png';

import './HomeWelcomeSection.scss';

const HomeWelcomeSection = () => (
    <section className = 'welcome'>
        <HeaderBacking className = 'welcome__banner'>
            Welcome!
        </HeaderBacking>
        <img
            src={arthurSitting} 
            alt="worship"
            className = 'worshipImage'
        />
        <p className = 'welcome__greeting'>
        At the <span className = 'greeting__highlight'> Encounter Worship Center</span> our prayer for you is that you encounter God's presence, through the spoken Word, through the Worship, through our people and through the atmosphere, so that your lives will never again be the same.
        </p>
        <Button className = 'welcome__findOutMore yellowBG large'>
            Find Out More
        </Button>
    </section>
);

export default HomeWelcomeSection;