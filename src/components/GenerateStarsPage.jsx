import React from 'react';
import { connect } from 'react-redux';

import { genStarsFromTypes } from '../backend/genStar.js'
import { addStar, clearStars } from '../actions/starActions.js';


class GenerateStarsPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			numberStars: "10"
		}
	}

	onNumberStarsChange = (e) => {
		const numberStars = e.target.value;

		if(!numberStars || numberStars.match(/^\d+$/))
			this.setState(() => ({ numberStars }));
	}

	generateStars = () => {
		const numberStars = parseInt(this.state.numberStars);

		const numberTypes = {
			'O': Math.ceil(numberStars * 0.00003 / 100),
			'B': Math.ceil(numberStars * 0.13 / 100),
			'A': Math.ceil(numberStars * 0.6 / 100),
			'F': Math.ceil(numberStars * 3 / 100),
			'G': Math.ceil(numberStars * 7.6 / 100),
			'K': Math.ceil(numberStars * 12.1 / 100),
			'M': Math.ceil(numberStars * 76.45 / 100),
		}

		const stars = genStarsFromTypes(numberTypes);
		for(let star of stars) {
			this.props.dispatch(addStar(star));
		}

		this.props.history.push('/');
	}

	render() {
		return (
			<section>
				<header>
					<h2>Generate Stars</h2>
				</header>

				<main>
					<p>
						Number of stars
						<input
							type="string"
							value={ this.state.numberStars }
							onChange={ this.onNumberStarsChange }
						/>
					</p>

					<button onClick={ this.generateStars }>Generate</button>
				</main>
			</section>
		)
	}

}


export default connect()(GenerateStarsPage);
