import React, { useEffect } from 'react';

import withForm from '../../utils/hocs/withForm';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import TimePicker from '../TimePicker/TimePicker';
import { calendarDateFormatting, toMilitaryTime } from '../../utils/helperFunctions';
import { addNewDoc, COLLECTIONS } from '../../utils/firebase';

import './CalendarForm.scss';
import CheckboxInput from '../../components/CheckboxInput/CheckboxInput';
import DatePicker from '../../components/DatePicker/DatePicker';

const CalendarForm = ({
    handleChange,
    formState,
    formToggleHandler,
    handleChangeManual,
    handleCheckboxChange,
    dateToBeEdited,
    submitFormUpdate
}) => {
    const handleSubmit = () => {
        const year = dateToBeEdited.getYear() + 1900, 
            month = dateToBeEdited.getMonth(),
            day = dateToBeEdited.getDate();
        formToggleHandler();
        addNewDoc({
            date:  new Date(year, month, day, toMilitaryTime(formState.hour, formState.noon), formState.minute),
            name: formState.name || '',
            description: formState.description || ''
        }, COLLECTIONS.CALENDAR).then(() => submitFormUpdate());
    };

    
    useEffect(()=>{
        const time = {
            name: '',
            description: '',
            eventTime: {
                hour: '12',
                minute: '00',
                noon: 'pm',
            },
            recurringDate: new Date(),
            recurring: false
        };
        handleChangeManual(time)
    }, [handleChangeManual]);

    // useEffect(()=>{
    //     console.log(formState.eventTime)
    // }, [formState.eventTime])

    return(
        <div className = 'calendarForm'>
            <h1>Add event on {calendarDateFormatting(dateToBeEdited)}</h1>
            <Button 
                op = {formToggleHandler}
                className = 'whiteFont transparent calendarForm__cross'
            >
                ✕
            </Button> 
            <form>
                <TextInput
                    required
                    name = 'name'
                    label = 'Name'
                    handleChange = { handleChange } 
                    formState = { formState }
                    inputClassName = 'calendarForm__nameInput'
                />
                <TextInput
                    required
                    name = 'description'
                    label = 'Description'
                    textArea
                    handleChange = { handleChange } 
                    formState = { formState }
                    inputClassName = 'calendarForm__descriptionInput'
                />
                <TimePicker
                    name = 'eventTime'
                    handleChangeManual = {handleChangeManual}
                    className = 'calendarForm__timePicker'
                />
                <CheckboxInput 
                    name = 'recurring'
                    label = 'Is this a recurring event?'
                    handleCheckboxChange = {handleCheckboxChange}
                    formState = { formState }
                    inputClassName = 'calendarForm__recurringInput'
                />
                {
                    formState.recurring &&
                    <DatePicker
                        name = 'recurringDate'
                        title = 'End Date'
                        handleChangeManual = {handleChangeManual}
                        className = 'calendarForm__datePicker'
                    />
                }
                <Button 
                    op = {handleSubmit}
                    className = 'transparent whiteBorder medium'
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default withForm(CalendarForm);