import React from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';

import './CalendarPage.scss';
import CalendarComponent from '../../containers/Calendar/Calendar';

const CalendarPage = () => {


    return(
        <ParticleBG 
            className = 'calendarPage' 
            particleClassName = 'calendarPage__particles' 
        >
            <CalendarComponent/>
        </ParticleBG>
    );
};
export default CalendarPage;