import React, { useState, useEffect } from 'react';
import videoInfo from '../../utils/constants/videoListDefaults';

import withFetch from '../../utils/hocs/withFetch';

import './PastSermonsSection.scss';

const PastSermonsSection = () => {
    
    const [videoList, setVideoList] = useState(undefined);
    
    useEffect(()=>{
        let mounted = true;
        if(!videoList && mounted) withFetch("/recentVideos", list => {
            if(list?.error?.code >= 400) throw Error('Quota Error');
            setVideoList(list?.items)
          }, err => {
            setVideoList(videoInfo);
            console.log(err);
          });
          return () => mounted = false;
    });
    return (
        <section className = 'sermonsPage__videos scrollbar'>
            {
                videoList?.map((vid, index) => (
                    <div className = 'videos__vid' key = {index}>
                        <a 
                            href={`https://www.youtube.com/watch?v=${vid?.id?.videoId}`}
                            className = 'content__vidAnchor'
                        >
                            <img 
                                src={vid?.snippet?.thumbnails?.medium?.url} 
                                alt={vid?.snippet?.title}
                            />
                        </a>
                        <p className = 'vid__videoTitle'>
                            {vid?.snippet?.title.replace(/&quot;/g,'"')}
                        </p>
                        <p>{new Date(vid?.snippet?.publishedAt).toDateString()}</p>
                    </div>
                ))
            }
        </section>
    );
}

export default PastSermonsSection;
