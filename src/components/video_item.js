import React from 'react';

export default (props) => {
    return (
        <li className="list-group-item card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img" src="" alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">video title</h5>
                        <p className="card-text">video exp</p>
                        <p className="card-text"><small className="text-muted">Last Updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </li>
    )
}