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
        let hour = time.hour === '12' ? '00' : time.hour, 
            thisTime = `${(time.noon === 'am') ? hour : Number(hour)+ 12}:${time.minute}`;
        
        handleChangeManual(thisTime);

    }, [time, handleChangeManual]);

    return(
        <div className = 'timePicker'>
            <h3>Time of Event</h3>
            <div className = 'timePicker__clock'>
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
        </div>
    );
};
export default TimePicker;