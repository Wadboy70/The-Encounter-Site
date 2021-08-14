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
                <h1 className = 'displayItemPastor__title'>Apostle Arthur T. Hinton III</h1>
                <p>
                Arthur T. Hinton III is an Apostle, Songwriter, Musician, and Behavioral Psychologist. As the founder and lead Apostle at The Encounter Worship Center, it is his life's purpose to create limitless opportunities for all people from all walks of life to encounter God, so that their lives will be forever changed. He holds a Bachelor of Science from Millikin University in Organizational Leadership and a Master of Science from Kaplan University in Psychology with a concentration in Applied Behavior Analysis. Apostle Arthur resides in Tampa Florida with his wife First Lady Brittany and their four children, Justus, Adrienne, Liberty, and Arthur IV.
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