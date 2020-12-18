import React from 'react';

import ROUTES from '../../utils/routes';
import PastSermonsSection from '../../containers/PastSermonsSection/PastSermonsSection';
import SermonFrame from '../../containers/SermonFrame/SermonFrame';
import livestream from '../../assets/images/livestream.jpg';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

import './SermonsPage.scss';

const SermonsPage = () => {
    return(
        <div className = 'sermonsPage'>
            <Jumbotron image = {livestream} title ={ROUTES.LIVE_SERMONS.name}/>
            <SermonFrame/>
            <h2 className = 'sermonsPage__recentTitle'>Past Sermons</h2>
            <PastSermonsSection/>
        </div>
    );
};

export default SermonsPage;