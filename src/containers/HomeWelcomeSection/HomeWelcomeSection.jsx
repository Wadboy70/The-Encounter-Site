import React from 'react';

import HeaderBacking from '../../components/HeaderBacking/HeaderBacking';
import Button from '../../components/Button/Button';
import routes from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './HomeWelcomeSection.scss';

const HomeWelcomeSection = () => (
    <section className = 'welcome'>
        <HeaderBacking className = 'welcome__banner'>
            Welcome!
        </HeaderBacking>
        <img
            src={imageUrls.arthurStanding} 
            alt="worship"
            className = 'worshipImage'
        />
        <p className = 'welcome__greeting'>
        At the <span className = 'greeting__highlight'> Encounter Worship Center,</span> our prayer for you is that you encounter God's presence, through the spoken word, through the worship, through our people, and through the atmosphere, so that your lives will never again be the same!
        </p>
        <div className = 'welcome__end'>
            <img 
                src={imageUrls.signature} 
                alt="signature"
                className = 'signature'
            />
            <Button className = 'welcome__findOutMore transparent navyBorder navyFont medium' link = {routes.ABOUT.url}>
                Find Out More
            </Button>
        </div>
    </section>
);

export default HomeWelcomeSection;