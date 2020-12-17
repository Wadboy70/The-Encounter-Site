import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './NumberInput.scss';

const NumberInput = ({
        labelClassName = '',
        inputClassName = '',
        name = '',
        title,
        defaultValue = 0,
        handleChange = () => {},
        formstate,
        min = 0, 
        max = 60
    }) => {
    return(
    <div className = 'numberInput'>
        <label 
            htmlFor = {name} 
            className = {`numberInput__label ${labelClassName}`}
        >
            { titleCaseSentence(title) }
        </label>
        <input
            type = 'number'
            name = {name} 
            onChange = { handleChange }
            className = {`numberInput__input ${inputClassName}`}
            defaultValue = {defaultValue}
            min = {min}
            max = {max}
        />
    </div>
)};

export default NumberInput;
;