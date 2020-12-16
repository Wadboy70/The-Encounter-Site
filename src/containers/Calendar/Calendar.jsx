import React, { useContext, useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import { COLLECTIONS, getAllDocs } from '../../utils/firebase';
import { calendarDateFormatting, calendarDateGetTime } from '../../utils/helperFunctions';
import { FirebaseUserContext } from '../../utils/context/user.context';

import './Calendar.scss';
import USER_TIERS from '../../utils/constants/userTiers';

const CalendarComponent = ({
    handleClickDay = () => {},
    addEvent = () => {},
    events,
    setEvents,
    submitForm
}) => {

    const [month, setMonth] = useState(new Date().getMonth());
    const [user] = useContext(FirebaseUserContext);

    useEffect(() => {
        //pulls information from firestore database and saves values in a map
        const getStuff = async () => {
            let eventsList = {};
            (await getAllDocs(COLLECTIONS.CALENDAR, (a, b) => a.date - b.date)).forEach(event =>  {
                let day = calendarDateFormatting(event?.date?.toDate());
                eventsList[day] ? eventsList[day].push(event) : eventsList[day] = [event];
            });
            setEvents(eventsList);
        };
        if(!events) getStuff();
    }, [events, setEvents]);

    useEffect(()=>{
        setEvents(null);
    }, [submitForm, setEvents])

    const dynamicTileVal = (e) => {
        //sets dynamic css values for tiles based off of whether its a weekend, in this month, and gives a special class for mobile styling 
        return `${(e.date.getDay() === 0 || e.date.getDay() === 6) ? 'weekend' : ''} 
            ${events?.[calendarDateFormatting(e.date)] ? 'mobileMark' : ''} 
            ${calendarDateFormatting(e.date) === calendarDateFormatting(new Date()) ? 'today' : ''} 
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
                    <>
                        {
                            //This is the add event button for admins
                            (user?.tier === USER_TIERS.ADMIN) &&
                            <span 
                                onClick = {() => addEvent(e.date)}
                                className = 'circle__add'
                            >
                                +
                            </span>
                        }
                        <div className = 'calendar__circle'>
                            <div className = 'circle__content'>
                                {
                                    //This inserts the correct titles into the calendar boxes
                                    events?.[day] &&
                                    events[day].map((specificEvent, index) => {
                                        if(index < 2){
                                            return(
                                                <p key = {index}>
                                                    {`${calendarDateGetTime(specificEvent.date.toDate())} ${specificEvent.name}`}
                                                </p>
                                            )
                                        } else return '';
                                    })
                                }
                                {
                                    events?.[day]?.length > 2 &&
                                <p>{events[day].length - 2} more</p>
                                }
                            </div>
                        </div>
                    </>
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