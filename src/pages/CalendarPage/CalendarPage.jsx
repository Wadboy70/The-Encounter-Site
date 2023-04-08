import React, { useState } from 'react';

import CalendarComponent from '../../containers/Calendar/Calendar';
import CalendarDateDisplay from '../../containers/CalendarDateDisplay/CalendarDateDisplay';
import CalendarForm from '../../containers/CalendarForm/CalendarForm';
import { calendarDateFormatting } from '../../utils/helperFunctions';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './CalendarPage.css';

const CalendarPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [day, setDay] = useState(null);
    const [submitForm, setSubmitForm] = useState(0);
    const [events, setEvents] = useState(null);
    const formToggleHandler = () => setShowForm(!showForm);
    const submitFormUpdate = () => {
        setSubmitForm(submitForm + 1);
    };
    return(
        <div 
            className = 'calendarPage' 
        >
            <Jumbotron
                image = {imageUrls.planner}
                title = {ROUTES.CALENDAR.name.toUpperCase()}
            />
            {
                (day && events?.[calendarDateFormatting(day)]) &&
                <CalendarDateDisplay
                    dateInfo = {events[calendarDateFormatting(day)]}
                    submitFormUpdate = {submitFormUpdate}
                    events = {events}
                />
            }
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
        </div>
    );
};
export default CalendarPage;