import React from 'react';

import imageUrls from '../../assets/imageUrls';

import './AboutPastorSection.scss';

const AboutPastorSection = () => {

    return(
        <div
            className = 'aboutPastorSection purple'
        >
            <div 
                className = 'aboutPastorSection__displayItem'
            >
                <h1 className = 'displayItemPastor__title'>Pastor Arthur Thomas Hinton III</h1>
                <p>
                Arthur T. Hinton III is a Pastor, Songwriter, Musician, and Behavioral Psychologist. As the founder and lead Pastor at The Encounter Worship Center, it is his life's purpose to create limitless opportunities for all people from all walks of life to encounter God, so that their lives will be forever changed. He holds a Bachelor of Science from Millikin University in Organizational Leadership and a Master of Science from Kaplan University in Psychology with a concentration in Applied Behavior Analysis. Pastor Arthur resides in Tampa, Florida and has four beautiful children, Justus, Adrienne, Liberty, and Arthur IV.
                </p>
            </div>
            <img 
                src={imageUrls.arthurCollage} 
                alt="arthurCollage"
                className = 'aboutPastorSection__photo'
            />
        </div>        
    );
};

export default AboutPastorSection;