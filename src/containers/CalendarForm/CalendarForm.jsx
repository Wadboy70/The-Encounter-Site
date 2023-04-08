import React, { useEffect } from 'react';

import withForm from '../../utils/hocs/withForm';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import TimePicker from '../TimePicker/TimePicker';
import { calendarDateFormatting, toMilitaryTime } from '../../utils/helperFunctions';
import { addNewDoc, COLLECTIONS } from '../../utils/firebase';

import './CalendarForm.css';
import CheckboxInput from '../../components/CheckboxInput/CheckboxInput';
import DatePicker from '../../components/DatePicker/DatePicker';
import Dropdown from '../../components/Dropdown/Dropdown';
import NumberInput from '../../components/NumberInput/NumberInput';

const CalendarForm = ({
    handleChange,
    formState,
    formToggleHandler,
    handleChangeManual,
    handleCheckboxChange,
    dateToBeEdited,
    submitFormUpdate
}) => {
    const RECURRING_FREQ = {
        Days: 'Days',
        Weeks: 'Weeks',
        Months: 'Months'
    }
    const handleSubmit = () => {
        const year = dateToBeEdited.getFullYear(), 
            month = dateToBeEdited.getMonth(),
            day = dateToBeEdited.getDate();

        formToggleHandler();

        if(formState.recurring && formState.recurringInterval > 0){
            let dummyDate = dateToBeEdited, datesToAdd = [];
            while(dummyDate <= formState.recurringDate){
                datesToAdd.push(new Date(dummyDate.getTime()));
                switch(formState.recurringFreq){
                    case RECURRING_FREQ.Days:
                        dummyDate.setDate(dummyDate.getDate() + Number(formState.recurringInterval));
                        break;
                    case RECURRING_FREQ.Weeks:
                        dummyDate.setDate(dummyDate.getDate() + (7 * Number(formState.recurringInterval)));
                    break;
                    case RECURRING_FREQ.Months:
                        dummyDate.setMonth(dummyDate.getMonth() +  Number(formState.recurringInterval));
                    break;
                    default:

                    break;
                }
            };
            let seqId = new Date ().getTime();
            datesToAdd.forEach(date => {
                addNewDoc({
                    date:  new Date(date.getFullYear(), date.getMonth(), date.getDate(), toMilitaryTime(formState.eventTime.hour, formState.eventTime.noon), formState.eventTime.minute),
                    name: formState.name || '',
                    description: formState.description || '',
                    sequence: seqId
                }, COLLECTIONS.CALENDAR).then(() => submitFormUpdate());
            })
        }
        else{

            addNewDoc({
                date:  new Date(year, month, day, toMilitaryTime(formState.eventTime.hour, formState.eventTime.noon), formState.eventTime.minute),
                name: formState.name || '',
                description: formState.description || ''
            }, COLLECTIONS.CALENDAR).then(() => submitFormUpdate());
        }

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
            recurring: false,
            recurringFreq: RECURRING_FREQ.Days,
            recurringInterval: 1
        };
        handleChangeManual(time)
    }, [handleChangeManual, RECURRING_FREQ.Days]);


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
                        <div className = 'calendarForm__recurringInfo'>
                            <DatePicker
                                name = 'recurringDate'
                                title = 'End Date'
                                handleChangeManual = {handleChangeManual}
                                className = 'calendarForm__datePicker'
                            />
                            <p>Repeat once every: </p>
                            <NumberInput
                                name = 'recurringInterval'
                                handleChange = {handleChange}
                                defaultValue = {1}
                                min = {1}
                            />
                            <Dropdown
                                name = 'recurringFreq'
                                values = {Object.keys(RECURRING_FREQ)}
                                handleChange = {handleChange}
                                defaultVal = {RECURRING_FREQ.Days}
                            />
                        </div>
                    }
                <Button 
                    op = {handleSubmit}
                    className = 'transparent whiteBorder medium calendarForm__submit'
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default withForm(CalendarForm);