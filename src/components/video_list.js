import React from 'react';

import VideoItem from './video_item';

export default ({videos}) => {
    const videoItem = videos.map( video => {
        return (
            <VideoItem
                key={video.etag}
                video={video}
            />
        )
    });
    return(
        <div className="col-5">
            <ul className="list-group">
                {videoItem}
            </ul>
        </div>
    );
}