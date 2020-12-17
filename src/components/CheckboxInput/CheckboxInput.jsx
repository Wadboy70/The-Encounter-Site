import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './CheckboxInput.scss';

const CheckboxInput = ({
        labelClassName = '',
        inputClassName = '',
        name = '',
        label = '',
        handleChange = () => {},
        formState
    }) => {
        console.log(formState);
    return(
    <div className = 'checkboxInput'>
        <label 
            htmlFor = {name} 
            className = {`checkboxInput__label ${labelClassName}`}
        >
            { titleCaseSentence(label) }
        </label>
        <input
            type = 'checkbox'
            name = {name} 
            value = {formState?.[name]}
            onChange = { handleChange }
            className = {`checkboxInput__input ${inputClassName}`}
        />
    </div>
)};

export default CheckboxInput;