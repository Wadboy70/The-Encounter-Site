import React, { useState, useEffect } from 'react';

import withFetch from '../../utils/hocs/withFetch';

import './SermonFrame.scss';

const SermonFrame = () => {
    const [isLive, setIsLive] = useState(undefined);
    useEffect(() => {
        if(!isLive) withFetch("/checkLive", res => setIsLive(res.live));        
    });
    return (
        <>
            {
                (isLive) ?
                <iframe 
                    src="https://www.youtube.com/embed/live_stream?channel=UC_iDvnXDiDqg7u1cO-V41Mw&autoplay=1" 
                    frameBorder="0" 
                    allowFullScreen 
                    title = 'live stream'
                    className = 'sermonFrame'
                >
                </iframe>
                :
                <div className = 'sermonFrame'>
                  <h2>The stream has not started!</h2>
                </div>
            }
        </>
    );
}

export default SermonFrame;
