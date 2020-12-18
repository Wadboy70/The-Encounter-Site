import React, { useContext } from 'react';

import Button from '../../components/Button/Button';
import USER_TIERS from '../../utils/constants/userTiers';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { calendarDateFormatting, calendarDateGetTime } from '../../utils/helperFunctions';
import { COLLECTIONS, deleteDoc, getAllDocs } from '../../utils/firebase';

import './CalendarDateDisplay.scss';

const CalendarDateDisplay = ({
    dateInfo,
    submitFormUpdate = () => {}
}) => {
    const [user] = useContext(FirebaseUserContext);
    const deleteThisEvent = (id) => {
        let affirm = window.confirm('Are you sure you want to delete this event?');
        if(affirm) deleteDoc(id, COLLECTIONS.CALENDAR).then(() => submitFormUpdate());
    }
    const deleteSequence = async(seqId) => {
        let affirm = window.confirm('Are you sure you want to delete this sequence of events?');
        if (affirm){ 
            await getAllDocs(COLLECTIONS.CALENDAR).then(docs => {
                docs.forEach((doc, index) => {
                    doc.sequence === seqId && deleteDoc(doc.id, COLLECTIONS.CALENDAR);
                    if(index + 1 === docs.length) submitFormUpdate();
                });
            });
        }
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
                                <div className = 'thisEvent__delete'>
                                     {
                                        info.sequence &&
                                        <Button 
                                            className = 'small transparent navyBorder events__removeButton'
                                            op = {() => deleteSequence(info.sequence)}    
                                        >
                                            Delete Sequence
                                        </Button>
                                     }
                                    
                                    <Button 
                                        className = 'small transparent navyBorder events__removeButton'
                                        op = {() => deleteThisEvent(info.id)}    
                                    >
                                        Delete Event
                                    </Button>
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default CalendarDateDisplay;