import React from 'react'

class StarCard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			mass: '1.000',
			radius: '1.000',
			mass: '1.000',
			radius: '1.000',
			area: '1.000',
			volume: '1.000',
			density: '1.000',
			luminosity: '1.000',
			life: '1.000',
			temperature: '1.000',
			abs_temperature: '5778'
		};
	}

	onMassChange = (e) => {
		const mass = e.target.value;

		if(!mass || mass.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ mass }), this.recalcData);
	}

	onRadiusChange = (e) => {
		const radius = e.target.value;

		if(!radius || radius.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ radius }), this.recalcData);
	}

	recalcData = () => {
		const mass = parseFloat(this.state.mass);
		const radius = parseFloat(this.state.radius);
		if(isNaN(mass) || isNaN(radius))
			return;

		const area = Math.pow(radius, 2).toFixed(3);
		const volume = Math.pow(radius, 3).toFixed(3);
		const density = (mass / volume).toFixed(3);

		const luminosity = Math.pow(mass, 3.5).toFixed(3);
		const life = (mass / luminosity).toFixed(3);

		const temperature = Math.pow(luminosity / area, 0.25 ).toFixed(3);
		const abs_temperature = (temperature * 5778).toFixed(3);

		this.setState(() => ({
			area, volume, density, luminosity, life,
			temperature, abs_temperature
		}));
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
							<input
								type="text"
								autoFocus={ true }
								value={ this.state.radius }
								onChange={ this.onRadiusChange }
							/>
						</td>
					</tr>

					<tr>
						<td className="starTable__desc">
							Luminosity
						</td>
						<td className="starTable__data">
							{ this.state.luminosity } L☉
						</td>
						<td className="starTable__desc">
							Temperature
						</td>
						<td className="starTable__data">
							{ this.state.abs_temperature } K
						</td>
					</tr>

					<tr>
						<td className="starTable__desc">
							Life Time
						</td>
						<td className="starTable__data">
							{ this.state.life } t☉
						</td>
						<td className="starTable__desc">
							Density
						</td>
						<td className="starTable__data">
							{ this.state.density } ρ☉
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
