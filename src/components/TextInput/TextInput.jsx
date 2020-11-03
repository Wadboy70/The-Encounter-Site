import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './TextInput.scss';

const TextInput = ({password, name = '', label = '', required = false, handleChange = () => {}, formState = {}}) => {
    console.log(name);
    return(
    <>
        <label htmlFor = {name}>{ titleCaseSentence(label) }</label>
        <input 
            required = {required} 
            type = {password ? 'password' : 'text'} 
            name = {name} onChange = { handleChange }
        />
    </>
)};

export default React.memo(TextInput, (prev, next) => (prev.formState?.[prev.name] === next.formState?.[prev.name]));