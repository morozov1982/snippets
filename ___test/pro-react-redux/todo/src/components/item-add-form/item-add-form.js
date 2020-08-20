import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }

    //const { onItemAdded } = props;
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({label: ''});
        document.getElementById('labelInput').focus();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='item-add-form d-flex'>
                <input value={this.state.label} onChange={this.onLabelChange} type='text' className='form-control' placeholder='Чё делать?' id="labelInput" />
                <button className='btn btn-outline-secondary'>Добавить дело</button>
            </form>
        );
    };
};