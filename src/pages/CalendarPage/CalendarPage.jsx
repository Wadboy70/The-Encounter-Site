import React, { useEffect, useState } from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Calendar from 'react-calendar';
import { getAllEvents } from '../../utils/firebase';

import './CalendarPage.scss';

const CalendarPage = () => {

    // const [day, setDay] = useState(null);
    const [month, setMonth] = useState(new Date().getMonth());
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const getStuff = async () => {
            let eventsList = {};
            (await getAllEvents()).forEach(event =>  {
                let date = event?.date?.toDate(), 
                    day = `${date.getYear()}/${date.getMonth()}/${date.getDate()}`;
                eventsList[day] ? eventsList[day].push(event) : eventsList[day] = [event];
            });
            setEvents(eventsList);
        };
        if(!events) getStuff();
    });

    useEffect(()=>{
        console.log(events)
    }, [events])

    const dynamicTileVal = (e) => {
        return `${(e.date.getDay() === 0 || e.date.getDay() === 6) ? 'weekend' : ''} 
            ${(e.date.getMonth() !== month) ? 'notMonth' : ''} 
            calendar__tile`
    };

    return(
        <ParticleBG 
            className = 'calendarPage' 
            particleClassName = 'calendarPage__particles' 
        >
            <Calendar
                className = 'calendarPage__calendar'
                tileClassName = {dynamicTileVal}
                tileContent = { (e) =>{
                    let day = (`${e.date.getYear()}/${e.date.getMonth()}/${e.date.getDate()}`)
                    return <div className = {`${events?.[day]? 'active_event' : ''} calendar__circle`}></div>
                }
                }
                defaultView = {'month'}
                minDetail = {"month"}
                onActiveStartDateChange = {(e)=>{setMonth(e.activeStartDate.getMonth())}}
                locale = {'en-US'}

            />
        </ParticleBG>
    );
};
export default CalendarPage;