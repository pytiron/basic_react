import React from 'react';

export default ({video}) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src={imgUrl} alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{video.snippet.channelTitle}</h5>
                        <p className="card-text">{video.snippet.title}</p>
                        <p className="card-text"><small className="text-muted">{video.snippet.publishedAt}</small></p>
                    </div>
                </div>
            </div>
        </li>
    )
}