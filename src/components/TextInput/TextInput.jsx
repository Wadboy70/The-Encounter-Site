import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './TextInput.css';

const TextInput = ({
        labelClassName = '',
        inputClassName = '',
        password,
        name = '',
        label = '',
        required = false,
        textArea,
        handleChange = () => {},
        noFormat
    }) => {
    return(
    <div className = 'textInput'>
        <label 
            htmlFor = {name} 
            className = {`textInput__label ${labelClassName}`}
        >
            { noFormat ? label : titleCaseSentence(label) }
        </label>
        {
            textArea ?
            <textarea
                required = {required} 
                name = {name} 
                onChange = { handleChange }
                className = {`textInput__input ${inputClassName}`}
            /> : 
            <input 
                required = {required} 
                type = {password ? 'password' : 'text'} 
                name = {name} onChange = { handleChange }
                className = {`textInput__input ${inputClassName}`}
            />
        }
    </div>
)};

export default React.memo(TextInput, (prev, next) => (prev.formState?.[prev.name] === next.formState?.[prev.name]));