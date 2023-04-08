import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './CheckboxInput.css';

const CheckboxInput = ({
        labelClassName = '',
        inputClassName = '',
        name = '',
        label = '',
        handleCheckboxChange = () => {},
        formstate
    }) => {
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
            onChange = { handleCheckboxChange }
            className = {`checkboxInput__input ${inputClassName}`}
        />
    </div>
)};

export default CheckboxInput;
;