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
			coordsX: props.coordsX ? props.coordsX : 0,
			coordsY: props.coordsY ? props.coordsY : 0,
			coordsZ: props.coordsZ ? props.coordsZ : 0,
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

		const x = parseFloat(this.state.coordsX);
		const y = parseFloat(this.state.coordsX);
		const z = parseFloat(this.state.coordsX);

		const { mass, ...p  } = genStarFromMass(_mass, x, y, z);
		this.setState(() => ({ ...p }));
	}

	handleRandom = (e) => {
		e.preventDefault();

		const { coordsX, coordsY, coordsZ, ...star } = genStarFromType(this.state.type);

		if(this.props.first) {
			this.setState(() => ({ ...star }));
		} else {
			this.setState(() => ({ ...star, coordsX, coordsY, coordsZ }));
		}
	}

	onTypeChange = (e) => {
		const type = e.target.value;
		this.setState(() => ({ type }));
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onXChange = (e) => {
		const coordsX = e.target.value;

		if(!coordsX || coordsX.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ coordsX }), this.recalcData);
	}

	onYChange = (e) => {
		const coordsY = e.target.value;

		if(!coordsY || coordsY.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ coordsY }), this.recalcData);
	}

	onZChange = (e) => {
		const coordsZ = e.target.value;

		if(!coordsZ || coordsZ.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ coordsZ }), this.recalcData);
	}

	onSubmit = (e) => {
		let { mass, ...star } = this.state;
		mass = parseFloat(mass);

		this.props.onSubmit({ mass, ...star });
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

				<select
					onChange={ this.onTypeChange }
					value={ this.state.type }
				>
					<option value="M">M</option>
					<option value="K">K</option>
					<option value="G">G</option>
					<option value="F">F</option>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="O">O</option>
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

		const xInput = (
			<input
				value={
					typeof this.state.coordsX === 'string' ?
					this.state.coordsX :
					parseFloat(this.state.coordsX).toFixed(3).toString()
				}
				onChange={ this.onXChange }
			/>
		);

		const yInput = (
			<input
				value={
					typeof this.state.coordsY === 'string' ?
					this.state.coordsY :
					parseFloat(this.state.coordsY).toFixed(3).toString()
				}
				onChange={ this.onYChange }
			/>
		);

		const zInput = (
			<input
				value={
					typeof this.state.coordsZ === 'string' ?
					this.state.coordsZ :
					parseFloat(this.state.coordsZ).toFixed(3).toString()
				}
				onChange={ this.onZChange }
			/>
		);

		const position = (
			<table>
				<tbody>
					<tr>
						<td>x</td>
						<td>
							{
								this.props.editable ?
								xInput :
								this.state.coordsX.toFixed(3)
							} ly
						</td>

						<td>y</td>
						<td>
							{
								this.props.editable ?
								yInput :
								this.state.coordsY.toFixed(3)
							} ly
						</td>

						<td>z</td>
						<td>
							{
								this.props.editable ?
								zInput :
								this.state.coordsZ.toFixed(3)
							} ly
						</td>
					</tr>
				</tbody>
			</table>
		);

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
						{ !this.props.first && position }
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
