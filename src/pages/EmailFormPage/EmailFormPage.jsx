import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import ParticleBG from '../../components/ParticleBG/ParticleBG';
import TextInput from '../../components/TextInput/TextInput';
import { addNewDoc } from '../../utils/firebase';
import { sendEmail } from '../../utils/helperFunctions';
import withForm from '../../utils/hocs/withForm';
import { FORM_FIELD_INPUT_TYPE, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './EmailFormPage.scss';

const EmailFormPage = ({
        handleChange, 
        formState, 
        formName, 
        formInfo,
        children,
        className =''
    }) => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitEmail = () => {
        setFormSubmitted(true);
        const submitInfo = {
            name: formState?.name,
            to: formInfo?.submit?.to,
            subject: `${formState?.name}`,
            message: `${formState?.email}\n${formState.message}`
        }
        console.log(submitInfo);
        sendEmail(submitInfo);
    };

    const submitSignUpInfo = () => {
        addNewDoc(formState, formInfo?.submit?.collection);
        setFormSubmitted(true);
    }

    return(
        <ParticleBG className = {`emailFormsPage ${className}`} particleClassName = 'emailFormsPage__particles'>
            {
                formName &&
                <h1 className = 'emailFormsPage__title'>{ formName }</h1>
            }
            {children}
            {
                formSubmitted ? 
                <p className = 'emailFormPage__sentMessage'>Submitted! :)</p> :
                <form className = 'emailFormsPage__form'>
                    {
                        formInfo?.fields.map((field, index) => (
                                <TextInput
                                    key = {index}
                                    name = {field.name}
                                    label = {field.label}
                                    textArea = {field.type === FORM_FIELD_INPUT_TYPE.TEXT_AREA}
                                    handleChange = { handleChange } 
                                    formState = { formState }
                                    inputClassName = {
                                        field.type === FORM_FIELD_INPUT_TYPE.TEXT_AREA && 'emailFormsPage__message'
                                    }
                                />
                        ))
                    }
                    <Button
                        className = 'yellowBG medium emailFormsPage__button'
                        op = {formInfo?.submit?.type === FORM_SUBMIT_TYPE.EMAIL ? submitEmail : submitSignUpInfo}
                    >
                        Submit
                    </Button>
                </form>
            }
        </ParticleBG>
    );
};

export default withForm(EmailFormPage);