import React from 'react';
import './Button.scss';

const Button = ({
    op = () => {},
    children,
    addedClass
}) => (
    <button 
        className = {`button ${addedClass? addedClass : ''}`}
        onClick = {op}
    >
        {children}
    </button>
);

export default Button;
