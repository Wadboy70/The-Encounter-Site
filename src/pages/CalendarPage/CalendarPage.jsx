import React, { useEffect, useState } from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Calendar from 'react-calendar';

import './CalendarPage.scss';
import { useRef } from 'react';

const CalendarPage = () => {

    // const [day, setDay] = useState(null);

    const dynamicTileVal = (e) => {
        // console.log(e.date);
        return 'calendar__circle'
    };

    return(
        <ParticleBG 
            className = 'calendarPage' 
            particleClassName = 'calendarPage__particles' 
        >
            <Calendar
                className = 'calendarPage__calendar'
                tileClassName = {dynamicTileVal}
                tileContent = {
                    <div className = 'circle'></div>
                }
                selectRange = {true}
            />
        </ParticleBG>
    );
};
export default CalendarPage;