import React, { useEffect, useState } from 'react';

import Planner from '../../assets/images/planner.png';
import DisplayItem from '../../components/DisplayItem/DisplayItem';
import HighlightSection from '../HighlightSection/HighlightSection';
import Calendar from '../../assets/images/calendar.svg';
import { getAllEvents } from '../../utils/firebase';

import './HomeEventSection.scss';
import { calendarDateFormatting } from '../../utils/helperFunctions';

const HomeEventSection = () => {
    
    const [upcomingEvent, setUpcomingEvent] = useState(null)
    
    useEffect(()=>{
        const getEvents = async () => {
            if(!upcomingEvent) await getAllEvents().then(docs => (
                setUpcomingEvent( docs.find(doc => {
                    return new Date() - doc.date.toDate() < 0
                }))
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
                    button: 'See Calendar'
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