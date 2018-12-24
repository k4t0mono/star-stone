import { randomRange } from './utils.js';
import Star from './star.js';

export const generateStar = (st) => {
	const { mass, radius } = generateMassRadius(st);
	const star = new Star(mass, radius, st);

	return star;
}

const generateMassRadius = (st) => {
	let mass;
	switch(st) {
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

	let radius;
	if(mass > 1)
		radius = Math.pow(mass, 0.5);
	else
		radius = Math.pow(mass, 0.8);

	return { mass, radius };
}
