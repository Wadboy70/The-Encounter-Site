import React from 'react';

import {Link} from 'react-router-dom';

import './Button.scss';

const Button = ({
    op = () => {},
    children,
    className = '',
    link
}) => (
    <>
        {
            link?
                <Link 
                    to = {link}
                    className = {`button button_link ${className}`}>
                    {children}
                </Link>
            :
            <button 
                className = {`button ${className}`}
                onClick = {(e) => {
                    e.preventDefault();
                    op();
                }}
            >
                {children}
            </button>
        }
    </>
);

export default Button;
