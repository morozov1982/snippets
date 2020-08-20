import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Выучить React и Redux'),
            this.createTodoItem('Сделать крутячее приложение'),
            this.createTodoItem('Устроиться на работу')
        ],
        searchTerm: '',
        listFilter: 'All'
    };

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.maxId
        };
    };

    toggleProperty (arr, id, propName) {
        const newArr = arr.map((item) => {
            return item.id !== id ? item : {...item,
                [propName]: !item[propName]};
        });
        return newArr;
    };

    searchItems (data, searchTerm) {
        if(searchTerm.length === 0) {
            return data;
        }
        return data.filter((item) => {
            return item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    onSearchChange = (searchTerm) => {
        this.setState({searchTerm});
    }

    onFilterChange = (listFilter) => {
        this.setState({listFilter});
    }

    searchFilter = (items, listFilter) => {
        switch(listFilter) {
            case 'All':
                return items;
            case 'Active':
                return items.filter((item) => !item.done);
            case 'Done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    deleteItem = (id) => {
        const todoData = this.state.todoData.filter((item) => {
            return item.id !== id
        });
        this.setState({todoData});
        /* this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            };
        }); */
    };

    getMaxId = (arr) => {
        if(!arr) {return 1;}
        const ids = arr.map((item) => {
            console.log(item);
            return item.id;
        });
        return Math.max(...ids);
    }

    addItem = (str) => {
        const newItem = this.createTodoItem(str);

        const todoData = [
            ...this.state.todoData, newItem
        ];

        this.setState({todoData});
    }

    onToggleImportant = (id) => {
        const todoData = this.toggleProperty(this.state.todoData, id, 'important');
        this.setState({todoData});
        
    };

    onToggleDone = (id) => {
        const todoData = this.toggleProperty(this.state.todoData, id, 'done');
        this.setState({todoData});
    };

    render () {
        const {todoData, searchTerm, listFilter } = this.state;

        const visibleItems = this.searchFilter(this.searchItems(todoData, searchTerm), listFilter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter onFilterChange={this.onFilterChange} listFilter={listFilter} />
                </div>
                
                <TodoList
                    todoData={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <ItemAddForm onItemAdded={ this.addItem } />
            </div>
        );
    };
};