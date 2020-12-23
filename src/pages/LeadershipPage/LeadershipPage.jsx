import React from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import ROUTES from '../../utils/routes';
import Button from '../../components/Button/Button';

import './LeadershipPage.scss';
import imageUrls from '../../assets/imageUrls';

const LeadershipPage = () => {
    const leaderInfo = [
        {
            img: imageUrls.anthonyBio,
            link: ROUTES.MEN_MINISTRY
        },
        {
            img: imageUrls.brittanyBio,
            link: ROUTES.MUSIC_MINISTRY
        },
        {
            img: imageUrls.lavonBio,
            link: ROUTES.WOMEN_MINISTRY
        },
        {
            img: imageUrls.juliannaBio,
            link: ROUTES.YOUTH_MINISTRY
        },
        {
            img: imageUrls.tarneiceBio,
            link: ROUTES.ABOUT
        },
    ]
    return(
        <div className = 'leadershipPage'>
            <Jumbotron 
                image = {imageUrls.leadersPage} 
                title = 'LEADERSHIP'
            />
            <ul className = 'leadershipPage__leaders'>
                {
                    leaderInfo.map(leader => (
                        <li 
                            className = 'leaders__item'
                            key = {leader.link.name}
                        >
                            <Button 
                                link = {leader.link.url} 
                                className = 'leaders__button'
                            >
                                <img src={leader.img} alt={leader.link.name} className = 'leaders__bio'/>
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </div>

    );
};

export default LeadershipPage;