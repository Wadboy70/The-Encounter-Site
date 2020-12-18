import React, { useEffect, useState } from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import { getUpcomingEvent } from '../../utils/firebase';
import { calendarDateFormatting } from '../../utils/helperFunctions';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './HomeEventSection.scss';

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
    
    return(
        
        <HighlightSection 
            backgroundPhoto = {imageUrls.planner}
            className = 'upcomingEventSection purple'
        >
            <DisplayItem
                info = {{
                    title: 'Upcoming Event',
                    button: 'See Calendar',
                    buttonProps: {link: ROUTES.CALENDAR.url}
                }}
                className = 'upcomingEventSection__event'
            >
                {
                    upcomingEvent ? 
                    <>
                        <p>{upcomingEvent?.name}</p>
                        <p>{calendarDateFormatting(upcomingEvent?.date.toDate())}</p>
                        <p>{upcomingEvent?.description}</p>
                    </> :
                    <p>There are no upcoming events!</p>
                }
            </DisplayItem>
        </HighlightSection>
    );
};

export default HomeEventSection;