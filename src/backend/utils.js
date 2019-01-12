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

export const degreeToRadian = (a) => {
    return a * Math.PI / 180;
}

export const orthographicProjection2 = (point, origin) => {
    const lat0 = degreeToRadian(origin.lat);
    const lon0 = degreeToRadian(origin.lon);
    const lat = degreeToRadian(point.latitude);
    const lon = degreeToRadian(point.longitude);

    const c = Math.sin(lat0) * Math.sin(lat) + Math.cos(lat0) * Math.cos(lat) * Math.cos(lon - lon0);
    if(c < 0) return;

    const x = Math.cos(lat) * Math.sin(lon - lon0);
    const y = Math.cos(lat0) * Math.sin(lat) - Math.sin(lat0) * Math.cos(lat) * Math.cos(lon - lon0);
    return { x, y }
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