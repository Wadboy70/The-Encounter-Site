import React from 'react';

import Slideshow from '../../containers/Slideshow/Slideshow';

import './HomePage.scss';

const HomePage = () => {
    return(
        <>
            <Slideshow interval = {9000}/>
        </>
    );
};

export default HomePage;
