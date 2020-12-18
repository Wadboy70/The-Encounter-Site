import React from 'react';

import ROUTES from '../../utils/routes';
import PastSermonsSection from '../../containers/PastSermonsSection/PastSermonsSection';
import SermonFrame from '../../containers/SermonFrame/SermonFrame';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import imageUrls from '../../assets/imageUrls';

import './SermonsPage.scss';

const SermonsPage = () => {
    return(
        <div className = 'sermonsPage'>
            <Jumbotron image = {imageUrls.livestream} title ={ROUTES.LIVE_SERMONS.name}/>
            <SermonFrame/>
            <h2 className = 'sermonsPage__recentTitle'>Past Sermons</h2>
            <PastSermonsSection/>
        </div>
    );
};

export default SermonsPage;