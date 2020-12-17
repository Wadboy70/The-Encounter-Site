import React, {useState} from 'react';
import { useEffect } from 'react';

import Dropdown from '../../components/Dropdown/Dropdown';

import './DatePicker.scss';

const DatePicker = ({name = 'date', handleChangeManual, title = 'Date Picker'}) => {
    const today = new Date ();
    const [timeState, setTimeState] = useState({
        year: today.getFullYear(),
        month: today.getMonth() +1,
        day: today.getDate(),
    });
    const handleChange = e => {
        setTimeState({...timeState, [e.target.name]: e.target.value})
    };
    useEffect(() => {
        handleChangeManual({[name]: new Date (timeState.year, timeState.month - 1, timeState.day)})
    }, [timeState, handleChangeManual, name])
    return(
        <div className = 'datePicker'>
            <h3>{title}</h3>
            <div className = 'datePicker__clock'>
                <Dropdown
                    name = 'day'
                    title = 'Day'
                    values = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}
                    handleChange = {handleChange}
                    defaultVal = {today.getDate()}
                />
                <Dropdown
                    name = 'month'
                    title = 'Month'
                    values = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    handleChange = {handleChange}
                    defaultVal = {today.getMonth()+1}
                />
                <Dropdown
                    name = 'year'
                    title = 'Year'
                    values = {(() => {
                        let thisYear = new Date().getFullYear(), arr = [];
                        for(let i = 0; i < 10; i++){
                            arr.push(thisYear + i)
                        }
                        return arr;
                    })()}
                    handleChange = {handleChange}
                    defaultVal = {today.getFullYear()}
                />
            </div>
        </div>
    );
};
export default DatePicker;