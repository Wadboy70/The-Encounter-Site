import React from 'react';

import withForm from '../../utils/hocs/withForm';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

import './CalendarForm.scss';
import TimePicker from '../TimePicker/TimePicker';

const CalendarForm = ({
    handleChange,
    formState,
    drawerToggleHandler,
    handleChangeManual
}) => {
    const handleSubmit = () => {

    }

    return(
        <div className = 'calendarForm'>
            <Button 
                op = {drawerToggleHandler}
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
                    handleChangeManual = {handleChangeManual}
                    className = 'calendarForm__timePicker'
                />
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