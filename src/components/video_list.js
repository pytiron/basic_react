import React from 'react';

import VideoItem from './video_item';

export default (videos) => {
    console.log(videos);
    if(videos){
        return <div>준비중..</div>
    }

    const ItemList = videos.map(video =>{
        return <VideoItem key={video.etag} item={video} />
    });
    return(
        <div className="col-5">
            <ul>
                {ItemList}
            </ul>
        </div>
    )
}