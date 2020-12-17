import React from 'react';


import './Dropdown.scss';

const Dropdown = ({
        className = '',
        name = '',
        handleChange = () => {},
        values = [],
        defaultVal = null,
        title
    }) => {
    return(
    <div className = 'dropdownContainer'>
        {
            title &&
            <label className = 'dropdown__title'>{title}</label>
        }
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
    </div>
)};

export default Dropdown;