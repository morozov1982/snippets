import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{
    state = {
        label: ''
    }

    onSearchChange = (e) => {
        const label = e.target.value;
        this.setState({label});
        this.props.onSearchChange(label);
    }

    render() {
        return (
            <input type="text" placeholder="Пиши и ищи" className="form-control search-input" onChange={this.onSearchChange} value={this.state.label} id="search" />
        );
    }
};