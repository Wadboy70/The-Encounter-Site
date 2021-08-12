import React, { useEffect, useState } from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import { getUpcomingEvent } from '../../utils/firebase';
import { calendarDateGetTime } from '../../utils/helperFunctions';
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
                    upcomingEvent &&
                    upcomingEvent.map( (event, i) =>
                        <div key = {i} >
                            <p>{event.name} - {event.date.toDate().toDateString()}</p>
                            <p>{calendarDateGetTime(event.date.toDate())}</p>
                            <p>{event.description}</p>
                        </div>
                    )
                }
            </DisplayItem>
        </HighlightSection>
    );
};

export default HomeEventSection;