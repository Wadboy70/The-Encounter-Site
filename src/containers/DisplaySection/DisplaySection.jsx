import React from 'react';

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import Kid from '../../assets/images/Kid.svg';
import Coin from '../../assets/images/coins.svg';
import Computer from '../../assets/images/computer.svg';

import './DisplaySection.scss';

const DisplaySection = () => {
    const displayContent = [
        {
            icon: Kid,
            title: 'Kid\'s Ministry',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem ipsum dolor sit amet',
            button: 'Find Out More'
        },
        {
            icon: Coin,
            title: 'Giving',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            button: 'Give'
        },
        {
            icon: Computer,
            title: 'Live Streams',
            content: ' Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
            button: 'Watch Now'
        }
    ];
    return(
        <section className = 'display'>
            {
                displayContent.map((display, index) => (
                    <DisplayItem key = {index} info = {display} className = 'display__item'/>
                ))
            }
        </section>
    );
};

export default DisplaySection;