import React from 'react';
import { useState } from 'react';

import Button from '../Button/Button';
import slide1 from '../../utils/images/friends4.jpg';
import slide2 from '../../utils/images/worshipBackground.jpg';

import './Slideshow.scss';

const Slideshow = () => {
    const slides = [slide1,slide2];
    const [x, setX] = useState(0)
    const goLeft = () => {
        (x === 0) ? setX(-100*(slides.length-1)) : setX(x+100);

    };
    const goRight = () => {
        console.log(x);
        (x === -100*(slides.length-1)) ? setX(0) : setX(x-100);
    };
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