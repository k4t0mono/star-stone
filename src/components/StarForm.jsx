import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'

import { generateStar } from '../backend/generateStar.js';


class StarForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			type: 'O',
			mass: '',
			radius: '',
		}
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onTypeChange = (e) => {
		const type = e.target.value;
		this.setState(() => ({ type }));
	}

	onMassChange = (e) => {
		const mass = e.target.value;

		if(!mass || mass.match(/^\d+(\.\d{0,6})?$/))
			this.setState(() => ({ mass }));
	}

	onRadiusChange = (e) => {
		const radius = e.target.value;

		if(!radius || radius.match(/^\d+(\.\d{0,6})?$/))
			this.setState(() => ({ radius }));
	}

	genRadomStar = (e) => {
		e.preventDefault();
		const { type } = this.state;

		const star = generateStar(type);
		this.setState(() => ({
			mass: star.mass.toFixed(6),
			radius: star.radius.toFixed(6),
		}))
	}

	calcData = (e) => {
		e.preventDefault();
	}

	render() {
		return (
			<div></div>
			// <div>
			// 	<form onSubmit={ this.genRadomStar }>
			// 		<input
			// 			type="text"
			// 			placeholder="Name"
			// 			autoFocus={ true }
			// 			value={ this.state.name }
			// 			onChange={ this.onNameChange }
			// 		/>
			//
			// 		<select
			// 			value={ this.state.type }
			// 			onChange={ this.onTypeChange }
			// 		>
			// 			<option value="O">O</option>
			// 			<option value="B">B</option>
			// 			<option value="A">A</option>
			// 			<option value="F">F</option>
			// 			<option value="G">G</option>
			// 			<option value="K">K</option>
			// 			<option value="M">M</option>
			// 		</select>
			//
			// 		<button>Random Star</button>
			// 	</form>
			//
			// 	<br />
			//
			// 	<form onSubmit={ this.calcData }>
			// 		<input
			// 			type="text"
			// 			placeholder="Mass"
			// 			autoFocus={ true }
			// 			value={ this.state.mass }
			// 			onChange={ this.onMassChange }
			// 		/>
			//
			// 		<input
			// 			type="text"
			// 			placeholder="Radius"
			// 			autoFocus={ true }
			// 			value={ this.state.radius }
			// 			onChange={ this.onRadiusChange }
			// 		/>
			//
			// 	<button>Calculate Data</button>
			// 	</form>
			// </div>
		)
	}

}

export default StarForm;
