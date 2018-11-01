import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {
    render() {
        const { label, onToggleDoneState, onToggleImportantState, onItemDeleted, done, important } = this.props;
        let classNames = "todo-list__item";

        if(done) classNames += " todo-list__item_done";
        if(important) classNames += " todo-list__item_important";

        return (
            <span className={ classNames }>
                <span className="todo-list__text" onClick={ onToggleDoneState }>{ label }</span>
                <button type="button" 
                        className="btn btn-outline-success btn-sm todo-list__button todo-list__button_important"
                        onClick={ onToggleImportantState }>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm todo-list__button todo-list__button_deleted"
                    onClick={ onItemDeleted }>
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        );
    };
}