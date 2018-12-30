import React from 'react';
import { connect } from 'react-redux';

import { genNStars } from '../backend/genStar.js'
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
		const stars = genNStars(numberStars);

		for(let star of stars) {
			this.props.dispatch(addStar({ name: '', ...star }));
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
