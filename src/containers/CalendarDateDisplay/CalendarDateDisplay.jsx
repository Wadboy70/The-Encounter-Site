import React, { useContext } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { calendarDateFormatting, calendarDateGetTime } from '../../utils/helperFunctions';
import { deleteEvent } from '../../utils/firebase';

import './CalendarDateDisplay.scss';

const CalendarDateDisplay = ({
    dateInfo,
    submitFormUpdate = () => {}
}) => {
    const [user] = useContext(FirebaseUserContext);
    const deleteThisEvent = (id) => {
        let affirm = window.confirm('Are you sure you want to delete this event?');
        if(affirm) deleteEvent(id).then(() => submitFormUpdate());
    }
    return(
        <div className = 'calendarDateDisplay'>
            <h2 className = 'calendarDateDisplay__title'>
                {calendarDateFormatting(dateInfo[0].date.toDate())} Events
            </h2>
            <div className = 'calendarDateDisplay__events'>
                {
                    dateInfo.map((info, index) => (
                        <div key = {index} className = 'events__thisEvent'>
                            <div>
                                <h3>
                                    {calendarDateGetTime(info.date.toDate())}
                                    <span> {info.name}</span>
                                </h3>
                                <p>{info.description}</p>
                            </div>
                            {
                                user?.tier === USER_TIERS.ADMIN &&

                                <Button 
                                    className = 'small transparent navyBorder events__removeButton'
                                    op = {() => deleteThisEvent(info.id)}    
                                >
                                    Delete Event
                                </Button>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default CalendarDateDisplay;