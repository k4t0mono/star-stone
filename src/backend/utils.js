export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const genId = () => {
	return Math.random().toString(36).substr(2, 9);
}

export const cartToSph = ({ x, y, z }) => {
    const radius = Math.sqrt(x*x + y*y + z*z);
    const inclination = Math.acos(z / radius);
    const azimuth = Math.atan2(y, x);

    return { radius, inclination, azimuth };
};

export const stereographicProjectionSph = ({ inclination, azimuth }) => {
    const radius = Math.sin(inclination) / (1 - Math.cos(inclination));

    return { radius, azimuth };
}

export const orthographicProjection = ({ inclination, azimuth }, { lon, lat }) => {
    const c = Math.sin(lat) * Math.sin(1 - azimuth) + Math.cos(lat) * Math.cos(1 - azimuth) * Math.cos(inclination - lon);
    if(c < 0) return;
    
    const x = Math.cos(1 - azimuth) * Math.sin(inclination - lon);
    const y = Math.cos(lat) * Math.cos(1 - azimuth) - Math.sin(lat) * Math.cos(1 - azimuth) * Math.cos(inclination - lon);
    return { x, y };
}

export const polarToCart = ({ radius, azimuth }) => {
    const x = radius * Math.cos(azimuth);
    const y = radius * Math.sin(azimuth);

    return { x, y };
}