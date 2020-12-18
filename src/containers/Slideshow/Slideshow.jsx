import React from 'react';
import { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import fullLogo from '../../assets/images/fullLogo.png';
import slide4 from '../../assets/images/ministryOne.jpg';
import slide3 from '../../assets/images/EWCBanner.jpg';
import slide2 from '../../assets/images/strongerTogether.jpg';
import slide1 from '../../assets/images/lensFlare.jpg';

import './Slideshow.scss';

const Slideshow = ({interval = 3000}) => {
    const slides = [slide1,slide2,slide3,slide4];
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
                    <img src={fullLogo} alt="encounterLogo"/>
                </div>

                <div 
                    className = {` greetingOverlay  ${(x===1) ? 'showOverlay' : 'hideOverlay'}`}
                >
                    <Button link = '/livesermons' className = 'transparent overlayButtonSlide'>
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