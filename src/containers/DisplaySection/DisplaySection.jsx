import React from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import Kid from '../../assets/images/Kid.svg';
import Coin from '../../assets/images/coins.svg';
import Computer from '../../assets/images/computer.svg';
import ROUTES from '../../utils/routes';

import './DisplaySection.scss';

const DisplaySection = () => {
    const displayContent = [
        {
            icon: Kid,
            title: 'Engage Youth Ministry',
            content: 'The Encounter Worship Center\'s Youth Ministry "Engage" has been designed to help all youth from elementary, middle, and high school age groups to engage God the father not just on Sundays, but in their everyday lives. Through our teaching outlets it is our expectation that our youth will grow in their faith, their character, and their relationships.',
            button: 'Find Out More',
            buttonProps: {}
        },
        {
            icon: Coin,
            title: 'Giving/ Tithing',
            content: 'Your generosity is positively changing lives in this ministry, community, and globally.  The Apostle Paul reminds us in 2 Corinthians 9:6-8 that whoever sows sparingly will reap sparingly and whosoever sows generously will reap generously.  As you generously sow into this work, it is Gods covenant promise to multiply back to you what has been given.  We want you to know that your seed creates resources for us to carry Gods love to the nations',
            button: 'Give',
            buttonProps: {}
        },
        {
            icon: Computer,
            title: 'Live Streams',
            content: 'Join our weekly livestreams where we have receive worship and wise sermons from our Pastor, Arthur T. Hinton.',
            button: 'Watch Now',
            buttonProps: {link: ROUTES.LIVE_SERMONS.url}
        }
    ];
    return(
        <section className = 'display'>
            {
                displayContent.map((display, index) => (
                    <DisplayItem key = {index} info = {display} className = 'display__item'>
                        <p>
                            {display.content}
                        </p>
                    </DisplayItem>
                ))
            }
        </section>
    );
};

export default DisplaySection;