import React from 'react';
import { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import slide2 from '../../utils/images/friends4.jpg';
import slide1 from '../../utils/images/lensFlare.jpg';
import overlay from '../../utils/images/fullLogo.png';

import './Slideshow.scss';

const Slideshow = ({interval = 3000}) => {
    const slides = [slide1,slide2];
    const [x, setX] = useState(0)
    const goLeft = () => {
        (x === 0) ? setX(-100*(slides.length-1)) : setX(x+100);

    };
    const goRight = () => {
        (x === -100*(slides.length-1)) ? setX(0) : setX(x-100);
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
                        key = {slide}
                        style = {{transform: `translateX(${x}%`,backgroundImage: `url(${slide})`}}
                    >
                    </div>
                ))
            }
            <div className = 'slideshow__overlay'>
                <img 
                    className = {`logoOverlay ${(x===0) ? 'showOverlay' : 'hideOverlay'}`}
                    src = {overlay} 
                    alt = 'fullLogo'
                />

                <div 
                    className = {` greetingOverlay  ${(x===-100) ? 'showOverlay' : 'hideOverlay'}`}
                >
                    <h1>
                        <span>The Encounter</span> 
                        <span>Worship Center</span> 
                    </h1>
                    <h2>
                        A Virtual Church Experience
                    </h2>
                    <Button link = '/livesermons' addedClass = 'medium whiteBorder'>
                        Watch Now
                    </Button>
                </div>

            </div>

            <Button 
            addedClass = 'slideshow__button slideshow__button_left transparent large'
            op = {goLeft}
            >{'<'}</Button>
            <Button 
            addedClass = 'slideshow__button slideshow__button_right transparent large'
            op = {goRight}
            >{'>'}</Button>
        </section>
    );
};

export default Slideshow;