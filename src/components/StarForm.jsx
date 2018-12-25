import React from 'react'

import { genStarFromMass, genStarFromType } from '../backend/genStar.js';


class StarCard extends React.Component {

	constructor(props) {
		super(props);

		this.scale = this.props.scale ? this.props.scale : 3;

		this.state = {
			mass: props.mass ? props.mass : 1.0,
			radius: props.radius ? props.radius : 1.0,
			area: props.area ? props.area : 1.0,
			volume: props.volume ? props.volume : 1.0,
			density: props.density ? props.density : 1.0,
			luminosity: props.luminosity ? props.luminosity : 1.0,
			life: props.life ? props.life : 1.0,
			temperature: props.temperature ? props.temperature : 1.0,
			abs_temperature: props.abs_temperature ? props.abs_temperature : 5778,
			type: props.type ? props.type : 'G',
			color: props.color ? props.color : 'fff4ea',
			name: props.name ? props.name : 'New Star',
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

		const { mass, ...p  } = genStarFromMass(_mass);
		this.setState(() => ({ ...p }));
	}

	handleRandom = (e) => {
		e.preventDefault();

		const star = genStarFromType(this.state.type, this.state.scale);
		this.setState(() => ({ ...star }));
	}

	onSelectChange = (e) => {
		const type = e.target.value;
		this.setState(() => ({ type }));
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onSubmit = (e) => {
		const star = { ...this.state };
		this.props.onSubmit(star);
	}

	render() {
		const inputMass = (
			<input
				type="text"
				autoFocus={ true }
				value={
					typeof this.state.mass === 'string' ?
					this.state.mass :
					parseFloat(this.state.mass).toFixed(3).toString()
				}
				onChange={ this.onMassChange }
			/>
		);

		const TableData = (
			<table className="starTable">
				<tbody>
					<tr>
						<td className="starTable__desc">
							Mass
						</td>
						<td className="starTable__data">
							{
								this.props.editable ?
								inputMass :
								this.state.mass.toFixed(this.scale)
							} M☉
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

		const titleEditable = (
			<div>
				<input
					type="text"
					value={ this.state.name }
					onChange={ this.onNameChange }
				/>

				<select onChange={ this.onSelectChange }>
					<option value="O">O</option>
					<option value="B">B</option>
					<option value="A">A</option>
					<option value="F">F</option>
					<option value="G">G</option>
					<option value="K">K</option>
					<option value="M">M</option>
				</select>

				<button onClick={ this.handleRandom }>
					Random
				</button>
			</div>
		);

		const titleNonEditble = (
			<h3>
				{ this.state.name }
				<span>{ this.state.type }</span>
			</h3>
		)

		return(
			<div className="starCard">
				<section className="starCard__data">
					<header>
						{
							this.props.editable ?
							titleEditable :
							titleNonEditble
						}
					</header>

					<main>
						{ TableData }
					</main>
				</section>

				<section className="starCard__img">
					<img src={`https://via.placeholder.com/200/${this.state.color}`} />
				</section>

				{
					this.props.editable &&
					<button onClick={ this.onSubmit }>Save</button>
				}
			</div>
		)
	}
}

export default StarCard;
