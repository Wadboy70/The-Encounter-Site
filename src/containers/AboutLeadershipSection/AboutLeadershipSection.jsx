import React from 'react';

import imageUrls from '../../assets/imageUrls';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';

import './AboutLeadershipSection.scss';

const AboutLeadershipSection = () => {
    
    return(
        <div className = 'aboutLeadershipSection'>
            <DisplayBox
                image = {imageUrls.leadersPage} 
                button = 'Find out more'
                description = 'Read about the leaders of our ministry'
                title = 'Our Ministry Leaders'
                buttonProps = {{link: ROUTES.LEADERSHIP.url}}
                cover
                center
            />
        </div>
    );
};

export default AboutLeadershipSection;