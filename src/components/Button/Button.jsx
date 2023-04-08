import React from 'react';

import {Link} from 'react-router-dom';

import './Button.css';

const Button = ({
    op = () => {},
    children,
    className = '',
    link,
    anchor
}) => (
    <>
        {
            link &&
                <Link 
                    to = {link}
                    className = {`button button_link ${className}`}>
                    {children}
                </Link>
        }
        {
          !link && !anchor &&  
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
        
        {
          anchor &&  
            <a 
                className = {`button ${className}`}
                href = {anchor}
            >
                {children}
            </a>
        }
    </>
);

export default Button;
