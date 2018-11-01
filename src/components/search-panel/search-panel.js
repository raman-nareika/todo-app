import React, { Component } from 'react';

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-info">All</button>
                    <button type="button" className="btn btn-outline-secondary">Active</button>
                    <button type="button" className="btn btn-outline-secondary">Done</button>
                </div>
            </div>
        );
    }
};