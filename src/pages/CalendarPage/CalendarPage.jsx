import React, { useEffect, useState } from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Calendar from 'react-calendar';
import { getAllEvents } from '../../utils/firebase';

import './CalendarPage.scss';

const CalendarPage = () => {

    const [day, setDay] = useState(null);
    const [events, setEvents] = useState({});

    useEffect(() => {
        
        const getStuff = async () => {
            console.log(await getAllEvents());
        };
        getStuff();
    })

    const dynamicTileVal = (e) => {
        // console.log(e.date);
        return 'calendar__tile'
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
                        // console.log(e)
                    return <div className = 'calendar__circle'></div>
                }
                }
                onClickMonth = {(e)=>{console.log(e)}}
            />
        </ParticleBG>
    );
};
export default CalendarPage;