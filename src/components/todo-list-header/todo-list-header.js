import React from 'react';
import './todo-list-header.css';

const TodoListHeader = ({ todoCount, doneCount }) => {
    return (
        <div className="list-header">
            <h1 className="list-header__title">TODO List</h1>
            <h2 className="list-header__stat">{ todoCount } more to do, { doneCount } done</h2>
        </div>
    );
};

export default TodoListHeader;