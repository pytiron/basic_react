import React from 'react';

import VideoItem from './video_item';

export default ({onChangeVideo, videos}) => {
    const videoItem = videos.map( video => {
        return (
            <VideoItem
                key={video.etag}
                onChangeVideo={(video) => onChangeVideo(video)}
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