import Star from './star.js';
import { randomRange, genId } from './utils.js';


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

	const x = randomRange(4, 40);
	const y = randomRange(4, 40);
	const z = randomRange(4, 40);
	return genStarFromMass(mass, x, y, z);
}
