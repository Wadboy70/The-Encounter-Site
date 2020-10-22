import React from 'react';

import {Link} from 'react-router-dom';

import './Button.scss';

const Button = ({
    op = () => {},
    children,
    addedClass,
    link
}) => (
    <>
        {
            link?
                <Link 
                    to = {link}
                    className = {`button button_link ${addedClass? addedClass : ''}`}>
                    {children}
                </Link>
            :
            <button 
                className = {`button ${addedClass? addedClass : ''}`}
                onClick = {op}
            >
                {children}
            </button>
        }
    </>
);

export default Button;
