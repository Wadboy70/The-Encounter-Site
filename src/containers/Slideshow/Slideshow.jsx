import React from 'react';
import { useState, useEffect } from 'react';

import Button from '../../components/Button/Button';
import imageUrls from '../../assets/imageUrls';
import ROUTES from '../../utils/routes';
import { COLLECTIONS, getAllDocs } from '../../utils/firebase';
import { sortFiles } from '../../utils/helperFunctions';

import './Slideshow.scss';

const Slideshow = ({interval = 3000}) => {
    const [slides, setSlides] = useState([]);
    const [x, setX] = useState(0)
    const goLeft = () => {
        (x <= 0) ? setX(slides.length) : setX(x-1);
    };
    const goRight = () => {
        (x === (slides.length)) ? setX(0) : setX(x+1);
    };
    useEffect(() => {
        const autoSlide = setInterval(goRight,interval);
        return () => clearInterval(autoSlide);
    });

    useEffect(()=>{
        let mounted = true;
        const getSlides = async () => {
            let val = await getAllDocs(COLLECTIONS.HOMEPAGE_PHOTOS, sortFiles);
            if (mounted) setSlides(val)
        };
        getSlides();
        return () => mounted = false;
    })

    return(
        <section className = 'slideshow'>
                <div 
                    className = 'slide' 
                    style = {{transform: `translateX(${x*-100}%`,backgroundImage: `url(${imageUrls.lensFlare})`,backgroundSize: x<1 && 'cover'}}
                >
                </div>
            {
                slides.map((slide, index) => (
                    <div 
                        className = 'slide' 
                        key = {index}
                        style = {{transform: `translateX(${x*-100}%`,backgroundImage: `url(${slide.url})`,backgroundSize: x<1 && 'cover'}}
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