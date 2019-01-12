import React from 'react';

import Map from './Map.jsx';
import { orthographicProjection2 } from '../backend/utils.js';

const magic = ({ latitude, longitude }) => {
	const x = -longitude / 90;
	const y = -latitude / 90;

	return { x, y };
}

class HelpPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			latitudeSlider: 90,
			latitude: 0,
			longitudeSlider: 180,
			longitude: 0,
		}
	}

	onLatitudeChange = (e) => {
		const latitudeSlider = parseInt(e.target.value);
		const latitude = latitudeSlider - 90

		this.setState(() => ({ latitudeSlider, latitude }))
	}

	onLongitudeChange = (e) => {
		const longitudeSlider = parseInt(e.target.value);
		const longitude = longitudeSlider - 180;

		this.setState(() => ({ longitudeSlider, longitude }));
	}

	recalcCoords = () =>  {

	}

	getCoordsRec = () => {
		const star = magic({ ...this.state });

		return [ { id: '123aqsdasd', ...star }];
	}

	getCoordsSN = () => {
		const id = 'sun';
		const cart = orthographicProjection2({ ...this.state }, { lat: 90, lon: 0 });

		const s = cart ? [ { id, ...cart } ] : [];
		return s;
	}

	getCoordsSS = () => {
		const id = 'sun';
		const cart = orthographicProjection2({ ...this.state }, { lat: -90, lon: 0 });

		const s = cart ? [ { id, ...cart } ] : [];
		return s;
	}

	render() {
		const slidersLL = (
			<div>
				latitude
				<input
					type='range'
					className='slider'
					max='180'
					value={ this.state.latitudeSlider }
					onChange={ this.onLatitudeChange }
				/>

				longitude
				<input
					type='range'
					className='slider'
					max='360'
					value={ this.state.longitudeSlider }
					onChange={ this.onLongitudeChange }
				/>
			</div>
		)

		const txt = (
			<div>
				<p>
					Latitude: { this.state.latitude } °
					Longitude: { this.state.longitude } °
				</p>
			</div>
		);

		return (
			<section>
				<header>
					HelpPage
				</header>

				<main>
					<Map
						coords={ this.getCoordsRec() }
						size={ 400 }
						type={ 1 }
					/>
					
					<br />
					{ slidersLL }
					{ txt }
					<br />

					<Map
						coords={ this.getCoordsSN() }
						size={ 400 }
					/>
					<Map
						coords={ this.getCoordsSS() }
						size={ 400 }
					/>
				</main>
			</section>
		)
	}
}


export default HelpPage;
