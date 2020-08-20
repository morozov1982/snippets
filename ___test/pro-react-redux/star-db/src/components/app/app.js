import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import './app.css';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList
} from '../sw-components';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		hasError: false,
		swapiService: new DummySwapiService()
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			return {
				swapiService: new Service()
			}
		});
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />
		}

		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService}>
					<div className="stardb-app">
						<Header onServiceChange={this.onServiceChange} />
						{planet}

						<div className="row mb2 button-row">
							<button
								className="toggle-planet btn btn-warning btn-lg"
								onClick={this.toggleRandomPlanet}>
								Toggle Random Planet
								</button>
							<ErrorButton />
						</div>

						<Row
							left={<PersonList />}
							right={<PersonDetails itemId={11} />}
						/>

						<Row
							left={<PlanetList />}
							right={<PlanetDetails itemId={5} />}
						/>

						<Row
							left={<StarshipList />}
							right={<StarshipDetails itemId={5} />}
						/>

					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
}