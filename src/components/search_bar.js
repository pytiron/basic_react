import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }
    render() {
        return (
            <div className="form-group row mt-3">
                <input className="form-control col-11"
                       type="text" placeholder="search"
                       aria-label="Search"
                       onChange={event => this.setState({keyword: event.target.value})}
                       value = {this.state.keyword}/>
                <input type="submit" className="col-1 form-control" value="search"/>
            </div>
        );
    }

}