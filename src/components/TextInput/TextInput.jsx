import React from 'react';

import { titleCaseSentence } from "../../utils/helperFunctions";

import './TextInput.scss';

const TextInput = ({password, text, required = false}) => (
    <>
        <label htmlFor = {text}>{ titleCaseSentence(text) }</label>
        <input required = {required} type = {password ? 'password' : 'text'} name = {text}/>
    </>
);

export default TextInput;