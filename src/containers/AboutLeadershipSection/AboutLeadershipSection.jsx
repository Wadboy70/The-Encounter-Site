import React from 'react';

import leadersPage from '../../assets/images/leadersPage.jpg';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';

import './AboutLeadershipSection.scss';

const AboutLeadershipSection = () => {
    
    return(
        <div className = 'aboutLeadershipSection'>
            <DisplayBox
                image = {leadersPage} 
                button = 'Find out more'
                description = 'Read about the leaders of our ministry'
                title = 'Our Ministry Leaders'
                buttonProps = {{link: ROUTES.LEADERSHIP.url}}
            />
        </div>
    );
};

export default AboutLeadershipSection;