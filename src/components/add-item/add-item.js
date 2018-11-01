import React, { Component } from 'react';

export default class AddItem extends Component {
    constructor() {
        super();

        this.state = {
            eventName: ''
        };
    }

    onEventNameChange = (e) => {
        this.setState({
            eventName: e.target.value
        });
    };

    onSubmit = (e) => {
        const { onItemAdded } = this.props;
        e.preventDefault();
        onItemAdded(this.state.eventName);
        this.setState({
            eventName: ''
        });
    };

    render() {
        return (
            <form className="d-flex" onSubmit={ this.onSubmit }>
                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Hmm" 
                       onChange={ this.onEventNameChange} value={ this.state.eventName }/>
                <button type="submit" className="btn btn-primary mb-2">
                    Add Item
                </button>
            </form>
        );
    }
}