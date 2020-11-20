import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import ParticleBG from '../../components/ParticleBG/ParticleBG';
import TextInput from '../../components/TextInput/TextInput';
import { sendEmail } from '../../utils/helperFunctions';
import validEmails from '../../utils/constants/validEmails';
import withForm from '../../utils/hocs/withForm';

import './EmailFormPage.scss';

const EmailFormPage = ({
        handleChange, 
        formState, 
        formName = 'Form', 
        to = validEmails.DEFAULT_EMAIL,
        children,
        className =''
    }) => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const emailFormSubmit = async () => {
        setFormSubmitted(true);
        const submitInfo = {
            name: formState?.name,
            to,
            subject: `${formState?.name} prayer request`,
            message: `${formState?.email}\n${formState.message}`
        }
        console.log(submitInfo);
        sendEmail(submitInfo);
    }

    return(
        <ParticleBG className = {`emailFormsPage ${className}`} particleClassName = 'emailFormsPage__particles'>
            <h1 className = 'emailFormsPage__title'>{ formName }</h1>
            {children}
            {
                formSubmitted ? 
                <h2 className = 'emailFormPage__sentMessage'>Prayer Request has been submitted! :)</h2> :
                <form className = 'emailFormsPage__form'>
                    <TextInput
                        name = 'name'
                        label = 'Name'
                        handleChange = { handleChange } 
                        formState = { formState }
                    />
                    <TextInput
                        required
                        name = 'email'
                        label = 'Email'
                        handleChange = { handleChange } 
                        formState = { formState }
                    />
                    <TextInput
                        required
                        name = 'message'
                        label = 'message'
                        textArea
                        handleChange = { handleChange } 
                        formState = { formState }
                        inputClassName = 'emailFormsPage__message'
                    />
                    <Button
                        className = 'yellowBG medium emailFormsPage__button'
                        op = {emailFormSubmit}
                    >
                        Submit
                    </Button>
                </form>
            }
        </ParticleBG>
    );
};

export default withForm(EmailFormPage);