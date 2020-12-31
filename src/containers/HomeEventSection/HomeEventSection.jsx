import React, { useEffect, useState } from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import { getUpcomingEvent } from '../../utils/firebase';
import { calendarDateFormatting } from '../../utils/helperFunctions';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import "./HomeEventSection.scss";

const HomeEventSection = () => {
    
    const [upcomingEvent, setUpcomingEvent] = useState(null)
    
    useEffect(()=>{
        const getEvents = async () => {
            if(!upcomingEvent) await getUpcomingEvent().then(doc => (
                setUpcomingEvent(doc)
            ));
        }
        getEvents();
    }, [upcomingEvent])
    
    useEffect(()=> {
        console.log(upcomingEvent)
    }, [upcomingEvent])
    return(
        
        <HighlightSection 
            backgroundPhoto = {imageUrls.planner}
            className = 'upcomingEventSection purple'
        >
            <DisplayItem
                info = {{
                    title: 'Upcoming Events',
                    button: 'See Calendar',
                    buttonProps: {link: ROUTES.CALENDAR.url}
                }}
                className = 'upcomingEventSection__event'
            >
                {
                    <div>
                        <p>Watch Night Prayer - December 31st 2020</p>
                        <p>11:30 pm</p>
                        <p>We will be having a corporate prayer as we enter into the new year of 2021. This prayer will be lead by our Pastor, Arthur T. Hinton III via Zoom.</p>
                    </div>
                }
            </DisplayItem>
        </HighlightSection>
    );
};

export default HomeEventSection;