import React from 'react';
import { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';

import './Slideshow.scss';
import imageUrls from '../../assets/imageUrls';
import ROUTES from '../../utils/routes';

const Slideshow = ({interval = 3000}) => {
    const slides = [imageUrls.lensFlare,imageUrls.strongerTogether,imageUrls.encounterBanner,imageUrls.ministryOne];
    const [x, setX] = useState(0)
    const goLeft = () => {
        (x <= 0) ? setX(slides.length-1) : setX(x-1);
    };
    const goRight = () => {
        (x === (slides.length-1)) ? setX(0) : setX(x+1);
    };
    useEffect(() => {
        const autoSlide = setInterval(goRight,interval);
        return () => clearInterval(autoSlide);
    });

    return(
        <section className = 'slideshow'>
            {
                slides.map((slide, index) => (
                    <div 
                        className = 'slide' 
                        key = {index}
                        style = {{transform: `translateX(${x*-100}%`,backgroundImage: `url(${slide})`,backgroundSize: x<1 && 'cover'}}
                    >
                    </div>
                ))
            }
            <div className = 'slideshow__overlay'>
                <div className = {`logoOverlay ${(x===0) ? 'showOverlay' : 'hideOverlay'}`}>
                    <img src={imageUrls.fullLogo} alt="encounterLogo"/>
                </div>

                <div 
                    className = {` greetingOverlay  ${(x===1) ? 'showOverlay' : 'hideOverlay'}`}
                >
                    <Button link = {ROUTES.LIVE_SERMONS.url} className = 'transparent overlayButtonSlide'>
                    </Button>
                </div>
            </div>
            {/* The Buttons that allow for slide movement */}
            <Button 
            className = 'slideshow__button slideshow__button_left transparent large'
            op = {goLeft}
            >{'<'}</Button>
            <Button 
            className = 'slideshow__button slideshow__button_right transparent large'
            op = {goRight}
            >{'>'}</Button>
        </section>
    );
};

export default Slideshow;