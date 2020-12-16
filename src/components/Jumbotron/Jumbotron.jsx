import React from 'react';

import './Jumbotron.scss';

const Jumbotron = ({image, title, caption}) => {
    return(
        <div className = 'jumbotron' style = {image && {backgroundImage: `url(${image})`}}>
            <div className = 'jumbotron__overlay'>
                {
                    title && 
                    <h1 className = 'jumbotron__title'>{title}</h1>
                }
                {
                    caption && 
                    <h2 className = 'jumbotron__caption'>{caption}</h2>
                }
            </div>
        </div>
    );
};

export default Jumbotron;