import React, { useEffect, useState } from 'react';

import ROUTES from '../../utils/routes';

import './SermonsPage.scss';

const SermonsPage = () => {
    const [isLive, setIsLive] = useState(undefined);
    useEffect(() => {
        const checkLive = async(url) => {
            try{
                let live = await fetch(url)
                .then(val => {
                    return val.text();
                })
                .then(html => html.search('{"text":" watching"}'));
                setIsLive(live !== -1);
                console.log(live);
            } catch(err){
                console.log(err, 'not Live')
            }
        };
        checkLive("https://www.youtube.com/c/nasa/live");
    })
    return(
        <div className = 'sermonsPage'>
            <h1>{ROUTES.LIVE_SERMONS.name}</h1>
            {
                //make sure to change the iframe channelID
                (isLive === undefined || isLive === true) &&
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/live_stream?channel=UCNWvbL4pkoOnKaPLozPrfvg&autoplay=1" 
                    frameBorder="0" 
                    allowFullScreen 
                    title = 'live stream'
                >
                </iframe>
            }
        </div>
    );
};

export default SermonsPage;