import React, { Component } from 'react';
import TodoListHeader from '../todo-list-header/todo-list-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';
import './app.css'

export default class App extends Component {
    constructor() {
        super();
        this.count = 0;
        this.state = {
            todoList: [
                this.createTodoListItem('Drink Coffee'),
                this.createTodoListItem('Complete the app'),
                this.createTodoListItem('Bla-bla-bla')
            ]
        };
        this.onEventDeleted = () => {};
    }

    createTodoListItem = (label) => {
        return {
            id: this.count++,
            label: label,
            done: false,
            important: false
        };
    };

    addItem = (label) => {
        const newItem = this.createTodoListItem(label);

        this.setState(({ todoList }) => {
            const newTodoList = [
                ...todoList,
                newItem
            ];
            
            return {
                todoList: newTodoList
            };
        });
    }

    deleteItem = (id) => {
        this.setState(({ todoList }) => {
            const newTodoList = todoList.filter(el => el.id !== id);
            
            return {
                todoList: newTodoList
            };
        });
    };
    
    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex(x => x.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

        return newArr;
    };

    onToggleImportantState = (id) => {
        this.setState(({ todoList }) => {
            return {
                todoList: this.toggleProperty(todoList, id, 'important')
            };
        });
    };

    onToggleDoneState = (id) => {
        this.setState(({ todoList }) => {
            return {
                todoList: this.toggleProperty(todoList, id, 'done')
            };
        });
    };

    render() {
        const { todoList } = this.state;
        const doneCount = this.state.todoList.filter(x => x.done).length;
        const todoCount = this.state.todoList.length - doneCount;

        return (
            <div>
                <TodoListHeader todoCount={ todoCount } doneCount={ doneCount }/>
                <SearchPanel />
                <TodoList
                    todos={ todoList }
                    onItemDeleted={ this.deleteItem } 
                    onToggleImportantState={ this.onToggleImportantState }
                    onToggleDoneState={ this.onToggleDoneState } />
                <AddItem
                    onItemAdded={ this.addItem } />
            </div>
        );
    };
};