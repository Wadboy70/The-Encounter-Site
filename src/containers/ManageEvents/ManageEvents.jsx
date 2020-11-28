import React from 'react';
import { useEffect } from 'react';

import { addNewEvent, getAllEvents } from '../../utils/firebase';

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
        </div>
    )
};

export default ManageEvents;