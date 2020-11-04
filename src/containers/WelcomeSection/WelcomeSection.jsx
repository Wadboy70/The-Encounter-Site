import React from 'react';

import HeaderBacking from '../../components/HeaderBacking/HeaderBacking';
import Button from '../../components/Button/Button';
import welcomeImage from '../../assets/images/worshipHands.jpg';

import './WelcomeSection.scss';

const WelcomeSection = () => (
    <section className = 'welcome'>
        <HeaderBacking addedClass = 'welcome__banner'>
            Welcome!
        </HeaderBacking>
        <img
            src={welcomeImage} 
            alt="worship"
            className = 'worshipImage'
        />
        <div className = 'welcome__content'>
            <p className = 'welcome__greeting'>
                Lorem ipsum dolor sit amet, consectetur <span className = 'greeting__highlight'>adipiscing</span>  elit, sed do eiusmod tempor incididunt
            </p>
            <Button className = 'welcome__findOutMore yellowBG large'>
                Find Out More
            </Button>
        </div>
    </section>
);

export default WelcomeSection;