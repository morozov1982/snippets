import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './people-page.css';

import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };
// TODO: добавить <Spinner />
    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={itemDetails} />
        );
    }
}