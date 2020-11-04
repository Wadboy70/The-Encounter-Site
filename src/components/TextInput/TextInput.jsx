import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './TextInput.scss';

const TextInput = ({password, name = '', label = '', required = false, handleChange = () => {}, formState = {}}) => {
    return(
    <div className = 'textInput'>
        <label htmlFor = {name} className = 'textInput__label'>{ titleCaseSentence(label) }</label>
        <input 
            required = {required} 
            type = {password ? 'password' : 'text'} 
            name = {name} onChange = { handleChange }
            className = 'textInput__input'
        />
    </div>
)};

export default React.memo(TextInput, (prev, next) => (prev.formState?.[prev.name] === next.formState?.[prev.name]));