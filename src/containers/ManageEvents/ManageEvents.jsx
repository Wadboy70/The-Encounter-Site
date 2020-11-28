import React from 'react';
import { useEffect } from 'react';

import { addNewEvent, getAllEvents } from '../../utils/firebase';
import ManageEventTable from '../ManageEventTable/ManageEventTable';
import ManageEventWindow from '../ManageEventWindow/ManageEventWindow';

import './ManageEvents.scss';

const ManageEvents = () => {

    useEffect(() => {
        // const api = async () => {
        //     addNewEvent({
        //         date:  new Date(),
        //         name: "Test Date",
        //         description: "blah blah blah blah"
        //     })
        // }
        // api();
        const getStuff = async () => {
            console.log(await getAllEvents());
        };
        getStuff();
    })

    console.log()
    return(
        <div className = 'manageEvents'>
            <ManageEventWindow/>
            <ManageEventTable/>
        </div>
    )
};

export default ManageEvents;