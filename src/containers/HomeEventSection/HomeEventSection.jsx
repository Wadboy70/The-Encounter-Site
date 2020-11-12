import React from 'react';

import Planner from '../../assets/images/planner.png';
import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import Calendar from '../../assets/images/calendar.svg';

import './HomeEventSection.scss';

const HomeEventSection = () => {

    return(
        
        <HighlightSection 
            backgroundPhoto = {Planner}
        >
            <DisplayItem
                info = {{
                    icon: Calendar,
                    title: 'Upcoming Event',
                    content: `October 19th at 5pm\nZoom Call\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
                    button: 'See Calendar'
                }}
            />
        </HighlightSection>
    );
};

export default HomeEventSection;