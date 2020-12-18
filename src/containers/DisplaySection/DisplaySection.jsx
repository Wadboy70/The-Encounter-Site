import React from 'react';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import ROUTES from '../../utils/routes';
import imageUrls from '../../assets/imageUrls';

import './DisplaySection.scss';

const DisplaySection = () => {
    const displayContent = [
        {
            title: 'Engage Youth Ministry',
            button: 'Find Out More',
            description: 'Engaging programming to help our youth grow in their faith',
            image: imageUrls.youth,
            buttonProps: {link: ROUTES.YOUTH_MINISTRY.url}
        },
        {
            title: 'Giving',
            button: 'Give',
            buttonProps: {link: ROUTES.GIVING.url},
            description: 'Your generosity is positively changing lives in this ministry, community, and globally',
            image: imageUrls.tithing
        },
        {
            title: 'This is church. Anywhere.',
            button: 'Watch Now',
            description: 'Watch Online',
            buttonProps: {link: ROUTES.LIVE_SERMONS.url},
            image: imageUrls.churchService
        }
    ];
    return(
        <section className = 'display'>
            {
                displayContent.map((display, index) => (
                    <DisplayBox key = {index} {...display} className = 'display__box'/>
                ))
            }
        </section>
    );
};

export default DisplaySection;