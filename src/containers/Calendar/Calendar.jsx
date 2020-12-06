import React, { useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import { getAllEvents } from '../../utils/firebase';

import './Calendar.scss';
import { calendarDateFormatting, calendarDateGetTime } from '../../utils/helperFunctions';

const CalendarComponent = ({handleClickDay = () => {}}) => {

    const [month, setMonth] = useState(new Date().getMonth());
    const [events, setEvents] = useState(null);

    useEffect(() => {
        //pulls information from firestore database and saves values in a map
        const getStuff = async () => {
            let eventsList = {};
            (await getAllEvents()).forEach(event =>  {
                let day = calendarDateFormatting(event?.date?.toDate());
                eventsList[day] ? eventsList[day].push(event) : eventsList[day] = [event];
            });
            setEvents(eventsList);
        };
        if(!events) getStuff();
    });

    const dynamicTileVal = (e) => {
        //sets dynamic css values for tiles based off of whether its a weekend, in this month, and gives a special class for mobile styling 
        return `${(e.date.getDay() === 0 || e.date.getDay() === 6) ? 'weekend' : ''} 
            ${events?.[calendarDateFormatting(e.date)] ? 'mobileMark' : ''} 
            ${(e.date.getMonth() !== month) ? 'notMonth' : ''} 
            calendar__tile`
    };

    return(
        <Calendar
            className = 'calendarPage__calendar'
            tileClassName = {dynamicTileVal}
            tileContent = { (e) =>{
                let day = calendarDateFormatting(e.date);
                return (
                    <div className = 'calendar__circle'>
                        {
                            //This inserts the correct titles into the calendar boxes
                            events?.[day] &&
                            events[day].map((specificEvent, index) => {
                                return(
                                    <p key = {index}>
                                        {`${calendarDateGetTime(specificEvent.date.toDate())} ${specificEvent.name}`}
                                    </p>
                                )
                            })
                        }
                    </div>
                )
            }
            }
            defaultView = {'month'}
            minDetail = {"month"}
            onActiveStartDateChange = {(e)=>{setMonth(e.activeStartDate.getMonth())}}
            locale = {'en-US'}
            onClickDay = {handleClickDay}

        />
    );
};
export default CalendarComponent;