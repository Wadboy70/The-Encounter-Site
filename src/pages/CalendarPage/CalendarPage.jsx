import React, { useState } from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import CalendarComponent from '../../containers/Calendar/Calendar';
import CalendarForm from '../../containers/CalendarForm/CalendarForm';
import { calendarDateFormatting } from '../../utils/helperFunctions';

import './CalendarPage.scss';

const CalendarPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [day, setDay] = useState(null);
    const [submitForm, setSubmitForm] = useState(0);
    const [events, setEvents] = useState(null);
    const formToggleHandler = () => setShowForm(!showForm);
    const submitFormUpdate = () => {
        setSubmitForm(submitForm + 1);
        console.log('new event')
    }
    return(
        <ParticleBG 
            className = 'calendarPage' 
            particleClassName = 'calendarPage__particles' 
        >
            <CalendarComponent 
                addEvent = {formToggleHandler}
                handleClickDay = {setDay}
                submitForm = {submitForm}   
                events = {events}
                setEvents = {setEvents}
            />
            {
                showForm &&
                <CalendarForm
                    dateToBeEdited = {day}
                    formToggleHandler = {formToggleHandler}
                    submitFormUpdate = {submitFormUpdate}
                />
            }
            {
                (day && events?.[calendarDateFormatting(day)]) &&
                <div>
                    
                </div>
            }
        </ParticleBG>
    );
};
export default CalendarPage;