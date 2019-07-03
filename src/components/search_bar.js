import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }
    render() {
        return (
            <div className="col-12 row mt-3 mb-3">
                <input className="form-control col-11"
                       type="text" placeholder="search"
                       aria-label="Search"
                       onChange={event => this.props.onSearchVideo(event.target.value)}
                       value = {this.state.keyword}/>

                <input type="submit" className="col-1 form-control" value="search"/>
            </div>
        );
    }

}