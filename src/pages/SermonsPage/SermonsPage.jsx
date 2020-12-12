import React, { useEffect, useState } from 'react';

import ROUTES from '../../utils/routes';

import './SermonsPage.scss';

const SermonsPage = () => {
    const [isLive, setIsLive] = useState(undefined);
    const [videoList, setVideoList] = useState(info);
    useEffect(() => {
        const checkLive = async(url) => {
            try{
                let live = await fetch(url)
                .then(val => {
                    return val.json();
                })
                .then(res => {
                    console.log(res);
                    return res.live;
                })
                setIsLive(live !== -1);
            } catch(err){
                console.log(err, 'not Live')
            }
        };
        const listRecentVideos = async (url) => {
                try{
                    let list = await fetch(url)
                    .then(val => {
                        return val.json();
                    })
                    .then(res => {
                        return res;
                    });
                    console.log(list);
                    setVideoList(list?.items);
                } catch(err){
                    console.log(err);
                }
        }
        if(!isLive) checkLive("/checkLive");
        if(!videoList) listRecentVideos('/recentVideos');
    })
    return(
        <div className = 'sermonsPage'>
            <h1>{ROUTES.LIVE_SERMONS.name.toUpperCase()}</h1>
            {
                //make sure to change the iframe channelID
                (isLive === undefined || isLive === true) ?
                <iframe 
                    src="https://www.youtube.com/embed/live_stream?channel=UCNWvbL4pkoOnKaPLozPrfvg&autoplay=1" 
                    frameBorder="0" 
                    allowFullScreen 
                    title = 'live stream'
                    className = 'sermonFrame'
                >
                </iframe>
                :
                <h2>The stream has not started!</h2>
            }
            <h2 className = 'sermonsPage__recentTitle'>Past Sermons</h2>
            <section className = 'sermonsPage__videos scrollbar'>
                {
                    videoList.map((vid, index) => (
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
        </div>
    );
};
let info = [
    {
      "kind": "youtube#searchResult",
      "etag": "FR62wx_okvd1jGnwBPqckEMGWTM",
      "id": {
        "kind": "youtube#video",
        "videoId": "e5dwfDPI3xU"
      },
      "snippet": {
        "publishedAt": "2020-11-30T04:39:51Z",
        "channelId": "UC_iDvnXDiDqg7u1cO-V41Mw",
        "title": "The Encounter Worship Center, Inc. Live Stream",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/e5dwfDPI3xU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/e5dwfDPI3xU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/e5dwfDPI3xU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Encounter Worship Center, Inc.",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-30T04:39:51Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "44HeFuU29OqGH1gv_BNz6dUcmv4",
      "id": {
        "kind": "youtube#video",
        "videoId": "Cxo1Oiqbpzs"
      },
      "snippet": {
        "publishedAt": "2020-11-23T04:43:50Z",
        "channelId": "UC_iDvnXDiDqg7u1cO-V41Mw",
        "title": "Weapons of Warfare - Part 2",
        "description": "2 Corinthians 10: 3-4.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Cxo1Oiqbpzs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Cxo1Oiqbpzs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Cxo1Oiqbpzs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Encounter Worship Center, Inc.",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-23T04:43:50Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "3z49IXjOaRKeZQWL1WZ4Pl3jKdw",
      "id": {
        "kind": "youtube#video",
        "videoId": "wvxN_f8lVCc"
      },
      "snippet": {
        "publishedAt": "2020-11-08T18:28:06Z",
        "channelId": "UC_iDvnXDiDqg7u1cO-V41Mw",
        "title": "Sermon: &quot; In the Midst of the Mess Just Say Yes! &quot;",
        "description": "The Encounter Worship Center.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wvxN_f8lVCc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wvxN_f8lVCc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wvxN_f8lVCc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Encounter Worship Center, Inc.",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-08T18:28:06Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "4KOw6wpBA1EKinez7YYs-gis53s",
      "id": {
        "kind": "youtube#video",
        "videoId": "hP9bvWQjLyM"
      },
      "snippet": {
        "publishedAt": "2020-11-03T21:33:12Z",
        "channelId": "UC_iDvnXDiDqg7u1cO-V41Mw",
        "title": "Sermon: &quot; Work Your Weapon! &quot;",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hP9bvWQjLyM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hP9bvWQjLyM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hP9bvWQjLyM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Encounter Worship Center, Inc.",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-03T21:33:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "w-lkCb5uLrCZ-IgIW-u51PxRkbE",
      "id": {
        "kind": "youtube#video",
        "videoId": "XOnUHt6F8Vc"
      },
      "snippet": {
        "publishedAt": "2020-10-27T20:03:51Z",
        "channelId": "UC_iDvnXDiDqg7u1cO-V41Mw",
        "title": "Sermon: “ There’s Safety You In The Secret Place! “",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XOnUHt6F8Vc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XOnUHt6F8Vc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XOnUHt6F8Vc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Encounter Worship Center, Inc.",
        "liveBroadcastContent": "none",
        "publishTime": "2020-10-27T20:03:51Z"
      }
    }
  ];
export default SermonsPage;