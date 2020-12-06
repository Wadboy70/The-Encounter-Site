import React, { useEffect, useState } from 'react';

import Dropdown from '../../components/Dropdown/Dropdown';

import './TimePicker.scss';

const TimePicker = ({handleChangeManual}) => {

    const [time, setTime] = useState({
        hour: '12',
        minute: '00',
        noon: 'pm'
    });

    const handleChange = (e) => {
        setTime({...time, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        let thisTime = `${(time.noon === 'am' || time.hour === '12') ? time.hour : Number(time.hour)+ 12}:${time.minute}`;
        console.log(thisTime);
        handleChangeManual(thisTime);
    }, [time, handleChangeManual]);

    return(
        <div className = 'timePicker'>
            <h1>Time of Event</h1>
            <Dropdown
                name = 'hour'
                values = {['01','02','03','04','05','06','07','08','09','10','11','12']}
                handleChange = {handleChange}
                defaultVal = '12'
            />
            <Dropdown
                name = 'minute'
                values = {['00','05','10','15','20','25','30','35','40','45','50','55']}
                handleChange = {handleChange}
            />
            <Dropdown
                name = 'noon'
                values = {['am','pm']}
                handleChange = {handleChange}
                defaultVal = 'pm'
            />
        </div>
    );
};
export default TimePicker;