import React, { useContext, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import Dropdown from '../../components/Dropdown/Dropdown';
import SignInSignOutButton from '../../components/SignInSignOutButton/SignInSignOutButton';
import TextInput from '../../components/TextInput/TextInput';
import { FirebaseUserContext } from '../../utils/context/user.context';
import { addNewDoc } from '../../utils/firebase';
import { replaceWhitespace, sendEmail } from '../../utils/helperFunctions';
import withForm from '../../utils/hocs/withForm';
import { FORM_FIELD_INPUT_TYPE, FORM_SUBMIT_TYPE } from '../../utils/routes';

import './FormSection.scss';

const FormSection = ({
        handleChange, 
        handleChangeManual, 
        formState, 
        formName, 
        formInfo,
        children,
        className = '',
        handleData
    }) => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [user] = useContext(FirebaseUserContext);

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
        if(formInfo?.submit?.partition){
            addNewDoc(formState, replaceWhitespace(formInfo?.submit?.collection + ' ' + formState[formInfo.submit.partition], '_'))
        }
        else addNewDoc(formState, formInfo?.submit?.collection);
        setFormSubmitted(true);
    }

    const whichSubmit = () => {
        if(formInfo?.submit?.type === FORM_SUBMIT_TYPE.EMAIL) 
            submitEmail();
        else if (formInfo?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE) 
            submitSignUpInfo();
        else handleData(formState);
    }

    useEffect(()=>{
        const setDefaultValues = () => {
            for(let field of formInfo?.fields){
                if(!formState[field?.name]) 
                    handleChangeManual({[field.name]: field.defaultVal || ''})
            }
        }
        if(formInfo?.fields?.length && !Object.keys(formState).length) setDefaultValues();
        
    });

    return(
        <div className = {`emailFormsPage ${className}`}>
            {
                formName &&
                <h1 className = 'emailFormsPage__title'>{ formName }</h1>
            }
            {children}
            {
                ((formInfo?.submit?.type !== FORM_SUBMIT_TYPE.ADMIN_STORAGE) || (formInfo?.submit?.type === FORM_SUBMIT_TYPE.ADMIN_STORAGE && user))  ?
                <>
                    {
                        formSubmitted ? 
                        <p className = 'FormSection__sentMessage'>Submitted! :)</p> :
                        <form className = 'emailFormsPage__form'>
                            {
                                formInfo?.fields.map((field, index) => (
                                        field.type === FORM_FIELD_INPUT_TYPE.DROPDOWN ? 
                                        <Dropdown
                                            key = {index}
                                            name = {field.name}
                                            title = {field.label}
                                            values = {field.values}
                                            handleChange = {handleChange}
                                            defaultVal = {field.defaultVal}
                                            className = 'form__dropdown'
                                            labelClassName = 'form__dropdownTitle'
                                        />
                                        :
                                        <TextInput
                                            key = {index}
                                            name = {field.name}
                                            label = {field.label}
                                            textArea = {field.type === FORM_FIELD_INPUT_TYPE.TEXT_AREA}
                                            handleChange = { handleChange } 
                                            formState = { formState }
                                            noFormat = {field.noFormat}
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
                </> :
                <>
                    <p className = 'emailFormsPage__signInMessage'>You must be signed in to fill out this form!</p>
                    <SignInSignOutButton/>
                </>
            }
        </div>
    );
};

export default withForm(FormSection);