import React from 'react';

import imageUrls from '../../assets/imageUrls';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';

import './AboutLeadershipSection.css';

const AboutLeadershipSection = () => {
    
    return(
        <div className = 'aboutLeadershipSection'>
            <DisplayBox
                image = {imageUrls.leadersPhoto} 
                button = 'Find out more'
                description = 'Read about the leaders of our ministry'
                title = 'Our Ministry Leaders'
                buttonProps = {{link: ROUTES.ABOUT.url}}
                cover
                center
            />
        </div>
    );
};

export default AboutLeadershipSection;