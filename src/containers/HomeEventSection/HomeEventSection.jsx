import React, { useEffect, useState } from 'react';

import Planner from '../../assets/images/planner.png';
import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import Calendar from '../../assets/images/calendar.svg';
import { getAllEvents, getUpcomingEvent } from '../../utils/firebase';

import './HomeEventSection.scss';
import { calendarDateFormatting } from '../../utils/helperFunctions';
import ROUTES from '../../utils/routes';

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
            backgroundPhoto = {Planner}
        >
            <DisplayItem
                info = {{
                    icon: Calendar,
                    title: 'Upcoming Event',
                    button: 'See Calendar',
                    buttonProps: {link: ROUTES.CALENDAR.url}
                }}
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