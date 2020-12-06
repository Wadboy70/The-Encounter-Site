import React, { useState, useContext } from 'react';

import ParticleBG from '../../components/ParticleBG/ParticleBG';
import Button from '../../components/Button/Button';
import CalendarComponent from '../../containers/Calendar/Calendar';
import CalendarForm from '../../containers/CalendarForm/CalendarForm';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';

import './CalendarPage.scss';

const CalendarPage = () => {
    const [user] = useContext(FirebaseUserContext);
    const [showForm, setShowForm] = useState(false);
    const drawerToggleHandler = () => setShowForm(!showForm);
    return(
        <ParticleBG 
            className = 'calendarPage' 
            particleClassName = 'calendarPage__particles' 
        >
            <CalendarComponent/>
            {
                (user?.tier === USER_TIERS.ADMIN) &&
                <Button
                    op = {drawerToggleHandler}
                    className = 'transparent medium whiteBorder'
                >
                    Add Date
                </Button>
            }
            {
                showForm &&
                <CalendarForm
                    drawerToggleHandler = {drawerToggleHandler}
                />
            }
        </ParticleBG>
    );
};
export default CalendarPage;