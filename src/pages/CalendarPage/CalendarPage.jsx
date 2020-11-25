import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Calendar from 'react-calendar';

import './CalendarPage.scss';

const CalendarPage = () => {
    return(
        <ParticleBG className = 'calendarPage' particleClassName = 'calendarPage__particles' >
            <Calendar/>
        </ParticleBG>
    );
};
export default CalendarPage;