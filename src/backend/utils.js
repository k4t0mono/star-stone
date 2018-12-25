export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const genId = () => {
	return Math.random().toString(36).substr(2, 9);
}
