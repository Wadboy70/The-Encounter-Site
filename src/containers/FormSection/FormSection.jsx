import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { addNewDoc } from '../../utils/firebase';
import { sendEmail } from '../../utils/helperFunctions';
import withForm from '../../utils/hocs/withForm';
import { FORM_FIELD_INPUT_TYPE, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './FormSection.scss';

const FormSection = ({
        handleChange, 
        formState, 
        formName, 
        formInfo,
        children,
        className = '',
        handleData
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
        sendEmail(submitInfo);
    };

    const submitSignUpInfo = () => {
        addNewDoc(formState, formInfo?.submit?.collection);
        setFormSubmitted(true);
    }

    const whichSubmit = () => {
        if(formInfo?.submit?.type === FORM_SUBMIT_TYPE.EMAIL) 
            submitEmail();
        else if (formInfo?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE) 
            submitSignUpInfo();
         handleData(formState);
    }

    return(
        <div className = {`emailFormsPage ${className}`}>
            {
                formName &&
                <h1 className = 'emailFormsPage__title'>{ formName }</h1>
            }
            {children}
            {
                formSubmitted ? 
                <p className = 'FormSection__sentMessage'>Submitted! :)</p> :
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
                        op = {whichSubmit}
                    >
                        Submit
                    </Button>
                </form>
            }
        </div>
    );
};

export default withForm(FormSection);