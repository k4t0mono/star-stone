import React from 'react'

import Star from '../backend/star.js';


class StarCard extends React.Component {

	constructor(props) {
		super(props);

		this.scale = this.props.scale ? this.props.scale : 3;

		this.state = {
			mass: '1.000',
			radius: 1.0,
			area: 1.0,
			volume: 1.0,
			density: 1.0,
			luminosity: 1.0,
			life: 1.0,
			temperature: 1.0,
			abs_temperature: 5778,
		};
	}

	onMassChange = (e) => {
		const mass = e.target.value;

		if(!mass || mass.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ mass }), this.recalcData);
	}

	recalcData = () => {
		const _mass = parseFloat(this.state.mass);
		if(isNaN(_mass))
			return;
		
		const { mass, ...p  } = new Star(_mass);
		this.setState(() => ({ ...p }));
	}

	render() {
		const TableData = (
			<table className="starTable">
				<tbody>
					<tr>
						<td className="starTable__desc">
							Mass
						</td>
						<td className="starTable__data">
							<input
								type="text"
								autoFocus={ true }
								value={ this.state.mass }
								onChange={ this.onMassChange }
							/>
						</td>
						<td className="starTable__desc">
							Radius
						</td>
						<td className="starTable__data">
							{ this.state.radius.toFixed(this.scale) } R☉
						</td>
					</tr>

					<tr>
						<td className="starTable__desc">
							Luminosity
						</td>
						<td className="starTable__data">
							{ this.state.luminosity.toFixed(this.scale) } L☉
						</td>
						<td className="starTable__desc">
							Temperature
						</td>
						<td className="starTable__data">
							{ this.state.abs_temperature.toFixed(0) } K
						</td>
					</tr>

					<tr>
						<td className="starTable__desc">
							Life Time
						</td>
						<td className="starTable__data">
							{ this.state.life.toFixed(this.scale) } t☉
						</td>
						<td className="starTable__desc">
							Density
						</td>
						<td className="starTable__data">
							{ this.state.density.toFixed(this.scale) } ρ☉
						</td>
					</tr>
				</tbody>
			</table>
		);

		return(
			<div className="starCard">
				<section className="starCard__data">
					<header>
						<h3>
							{ this.props.name }
							<span>{ this.props.type }</span>
						</h3>
					</header>

					<main>
						{ TableData }
					</main>
				</section>

				<section className="starCard__img">
					<img src="https://via.placeholder.com/200" />
				</section>
			</div>
		)
	}
}

export default StarCard;
