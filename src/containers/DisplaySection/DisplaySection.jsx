import React from 'react';
import DisplayBox from '../../components/DisplayBox/DisplayBox';
import youthImage from '../../assets/images/youthImage.jpg';
import churchService from '../../assets/images/churchService.jpg';
import tithing from '../../assets/images/tithing.jpg';
import ROUTES from '../../utils/routes';

import './DisplaySection.scss';

const DisplaySection = () => {
    const displayContent = [
        {
            title: 'Engage Youth Ministry',
            button: 'Find Out More',
            description: 'Engaging programming to help our youth grow in their faith',
            image: youthImage,
            buttonProps: {link: ROUTES.YOUTH_MINISTRY.url}
        },
        {
            title: 'Giving/ Tithing',
            button: 'Give',
            buttonProps: {anchor: 'https://www.givelify.com/givenow/1.0/NzExOTk=/selection'},
            description: 'Your generosity is positively changing lives in this ministry, community, and globally',
            image: tithing
        },
        {
            title: 'This is church. Anywhere.',
            button: 'Watch Now',
            description: 'Watch Online',
            buttonProps: {link: ROUTES.LIVE_SERMONS.url},
            image: churchService
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