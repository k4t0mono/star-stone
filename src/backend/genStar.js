import Star from './star.js';
import { randomRange, genId } from './utils.js';


export const genNStars = (numberStars) => {
	const numberTypes = {
		'O': Math.ceil(numberStars * 0.00003 / 100),
		'B': Math.ceil(numberStars * 0.13 / 100),
		'A': Math.ceil(numberStars * 0.6 / 100),
		'F': Math.ceil(numberStars * 3 / 100),
		'G': Math.ceil(numberStars * 7.6 / 100),
		'K': Math.ceil(numberStars * 12.1 / 100),
		'M': Math.ceil(numberStars * 76.45 / 100),
	}

	return genStarsFromTypes(numberTypes);
}

export const genStarsFromTypes = (numberTypes) => {
	let stars = [];

	for(let type in numberTypes) {
		for(let i = 0; i < numberTypes[type]; i++) {
			const id = genId();
			stars.push({ id, ...genStarFromType(type) });
		}
	}

	return stars;
}

export const genStarFromMass = (mass, x, y, z) => {
	return new Star(mass, x, y, z);
}

export const genStarFromType = (type) => {
	let mass;
	switch(type) {
		case 'O':
			mass = randomRange(16, 50); break;

		case 'B':
			mass = randomRange(2.1, 16); break;

		case 'A':
			mass = randomRange(1.4, 2.1); break;

		case 'F':
			mass = randomRange(1.04, 1.4);break;

		case 'G':
			mass = randomRange(0.8, 1.04); break;

		case 'K':
			mass = randomRange(0.45, 0.8); break;

		case 'M':
			mass = randomRange(0.08, 0.45); break;
	}

	const x = randomRange(-40, 40);
	const y = randomRange(-40, 40);
	const z = randomRange(-40, 40);
	return genStarFromMass(mass, x, y, z);
}
