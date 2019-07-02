import React, { Component } from 'react';
import youtube from 'youtube-api-search';

import apiKey from './api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            video : null
        };
        this.onSearchVideos('아이패드 미니5');
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <SearchBar onSearchVideo={term=>this.onSearchVideos(term)}/>
                    <VideoDetail video={this.state.video}/>
                    <VideoList
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }

    onSearchVideos(term){
        youtube({key: apiKey, term},videos=>{
            this.setState({
                videos: videos,
                video : videos[0]
            });
        });
    }
}