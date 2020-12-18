import React from 'react';

import ROUTES from '../../utils/routes';
import PastSermonsSection from '../../containers/PastSermonsSection/PastSermonsSection';
import SermonFrame from '../../containers/SermonFrame/SermonFrame';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import imageUrls from '../../assets/imageUrls';
import Button from '../../components/Button/Button';

import './SermonsPage.scss';

const SermonsPage = () => {
    return(
        <div className = 'sermonsPage'>
            <Jumbotron image = {imageUrls.livestream} title ={ROUTES.LIVE_SERMONS.name}/>
            <div className = 'sermonsPage__content'>
                <SermonFrame/>
                <Button 
                    className = 'transparent whiteBorder medium sermonsPage__watch'
                    anchor = 'https://www.youtube.com/user/arthurhintonmusic/live'
                >
                    Watch on YouTube
                </Button>
                <h2 className = 'sermonsPage__recentTitle'>Past Sermons</h2>
                <PastSermonsSection/>
            </div>
        </div>
    );
};

export default SermonsPage;