import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onItemDeleted, onToggleImportantState, onToggleDoneState }) => {
    return (
        <ul className="list-group todo-list mb-3">
            {
                todos.map(({ id, ...item }) => {
                    return (
                        <li key={ id } className="list-group-item">
                            <TodoListItem 
                                { ...item }
                                onItemDeleted={ () => onItemDeleted(id) }
                                onToggleImportantState={ () => onToggleImportantState(id) }
                                onToggleDoneState={ () => onToggleDoneState(id) } />
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default TodoList;