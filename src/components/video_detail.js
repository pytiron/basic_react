import React from 'react';

export default ({video})=>{
    if(!video){
        return <div><h3>Video Loading...</h3></div>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="col-7">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameborder="0"></iframe>
            </div>
            <div className="col-12 card">
                <h3 className="card-title mt-3">{video.snippet.channelTitle}</h3>
                <p className="card-body">{video.snippet.title}</p>
                <p className="card-body">{video.snippet.description}</p>
            </div>
        </div>
    )
}