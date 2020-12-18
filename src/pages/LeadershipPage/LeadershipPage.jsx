import React from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import leadersPage from '../../assets/images/leadersPage.jpg';
import anthonyBio from '../../assets/images/AnthonyAlexanderBio.jpg';
import brittanyBio from '../../assets/images/BrittanyWeaverBio.jpg';
import lavonBio from '../../assets/images/LavonBio.jpg';
import juliannaBio from '../../assets/images/JuliannaBio.jpg';
import ROUTES from '../../utils/routes';
import Button from '../../components/Button/Button';

import './LeadershipPage.scss';

const LeadershipPage = () => {
    const leaderInfo = [
        {
            img: anthonyBio,
            link: ROUTES.MEN_MINISTRY
        },
        {
            img: brittanyBio,
            link: ROUTES.MUSIC_MINISTRY
        },
        {
            img: lavonBio,
            link: ROUTES.WOMEN_MINISTRY
        },
        {
            img: juliannaBio,
            link: ROUTES.YOUTH_MINISTRY
        },
    ]
    return(
        <div className = 'leadershipPage'>
            <Jumbotron 
                image = {leadersPage} 
                title = 'our leaders'
            />
            <ul className = 'leadershipPage__leaders'>
                {
                    leaderInfo.map(leader => (
                        <li 
                            className = 'leaders__item hoverGrow'
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