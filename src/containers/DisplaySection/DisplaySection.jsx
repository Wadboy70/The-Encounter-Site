import React from 'react';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './DisplaySection.css';
import Button from '../../components/Button/Button';

const DisplaySection = () => {
    return(
        <section className = 'display'>
            <DisplayBox
                title = 'This is church. Anywhere.'
                button = 'Watch Now'
                description = 'Watch Online'
                buttonProps = {{link: ROUTES.LIVE_SERMONS.url}}
                image = {imageUrls.churchService}  
                className = 'display__box'
                justifyCenter
            />
            <MinistryList/>
        </section>
    );
};

const MinistryList = () => {
    const ministryList = [
        ROUTES.GIVING,
        ROUTES.MEN_MINISTRY,
        ROUTES.WOMEN_MINISTRY,
        ROUTES.YOUTH_MINISTRY,
        ROUTES.MUSIC_MINISTRY,
    ]
    return(
        <div className = 'ministryList'>
            <h2 className = 'ministryList__title'>Get Involved</h2>
            <ul className = 'ministryList__ministries'>
                {
                    ministryList.map(ministry => (
                        <li key = {ministry.name} className = 'ministries__ministryItem'>
                            <Button link = {ministry.url} className = 'transparent ministryItem__button'>
                                {ministry.name}
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DisplaySection;