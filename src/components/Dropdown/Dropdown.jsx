import React from 'react';


import './Dropdown.scss';

const Dropdown = ({
        className = '',
        name = '',
        handleChange = () => {},
        values = [],
        defaultVal = null
    }) => {
    return(
    <select 
        aria-label = {name}
        name = {name} 
        onChange = { handleChange }
        className = {`dropdown ${className}`}
        defaultValue = {defaultVal ? defaultVal : null}
    >
        {
            values.map(val=>(
                <option value = {val} key = {val}>{val}</option>
            ))
        }
    </select>
)};

export default Dropdown;