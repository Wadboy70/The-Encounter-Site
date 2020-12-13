import React from 'react';

import ROUTES from '../../utils/routes';
import PastSermonsSection from '../../containers/PastSermonsSection/PastSermonsSection';
import SermonFrame from '../../containers/SermonFrame/SermonFrame';

import './SermonsPage.scss';

const SermonsPage = () => {
    return(
        <div className = 'sermonsPage'>
            <h1>{ROUTES.LIVE_SERMONS.name.toUpperCase()}</h1>
            <SermonFrame/>
            <h2 className = 'sermonsPage__recentTitle'>Past Sermons</h2>
            <PastSermonsSection/>
        </div>
    );
};

export default SermonsPage;