import React, { useState } from 'react';
import FormSection from '../../containers/FormSection/FormSection';
import { passwordReset } from '../../utils/firebase';
import { FORM_FIELD_INPUT_TYPE } from '../../utils/routes';

import './ForgotPassword.scss';

const ForgotPassword = () => {
    const [message, setMessage] = useState(null);
    const info = 
    {
        fields: [
            {
                name: 'email',
                label: 'Email',
                type: FORM_FIELD_INPUT_TYPE.TEXT_INPUT
            }
        ]
    };
    const handleData = async (data) => {
        setMessage(null);
        passwordReset(data.email).then(res => setMessage(res?.message)).catch(res => setMessage(res?.message))
    }
    return(
        <div className = 'forgotPassword'>
            {
                message !== undefined &&
                <FormSection
                    formInfo = { info }
                    formName = 'Forgot Password'
                    handleData = { handleData }
                />

            }
            {
                message &&
                <p>{message}</p>
            }
            {
                message === undefined &&
                <p>Password Reset Email Sent!</p>
            }
        </div>
    );
};

export default (ForgotPassword);