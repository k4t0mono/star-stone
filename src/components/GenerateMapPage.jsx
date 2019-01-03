import React from 'react';
import { connect } from 'react-redux';

import Map from './Map.jsx';
import {
    cartToSph,
    stereographicProjectionSph,
    orthographicProjection,
    equiretangularProjection,
    polarToCart
} from '../backend/utils.js';


class GenerateMapPage extends React.Component {

    constructor(props) {
        super(props);

        this.stars = [];
        for(let i = 0; i < props.stars.length; i++) {
            const star = props.stars[i];
            const id = star.id;

            const pos = {
                x: star.coordsX,
                y: star.coordsY,
                z: star.coordsZ,
            }
            const sph = cartToSph(pos);
            this.stars.push({ id, ...sph });
        }

        this.state = {
            size: '400',
            projection: '0'
        }

        this.coords = [[], []];
        this.calcProjection('0');
    }

    calcProjection = (type) => {
        switch (type) {
            case '0':
                this.calcOrthografic();
                break;
        
            case '1':
                this.calcStereographic();
                break;
                
            case '2':
                this.calcEquiretangular();
                break;

            default:
                break;
        }
    }

    calcOrthografic = () => {
        let coordsN = [];
        let coordsS = [];

        for(let star of this.stars) {
            let cart = orthographicProjection(star, { lon: 0, lat: Math.PI/2 });
            const id = star.id;
            if(cart) {
                coordsN.push({ ...cart, id });
            } else {
                cart = orthographicProjection(star, { lon: 0, lat: -Math.PI/2 });
                coordsS.push({ ...cart, id });
            }
        }

        this.coords = [ coordsN, coordsS ];
    }

    calcStereographic = () => {
        const coords = [];

        for(let star of this.stars) {
            const polar = stereographicProjectionSph(star, { lon: 0, lat: Math.PI/2 });
            const cart = polarToCart(polar);
            const id = star.id;

            coords.push({ id, ...cart });
        }

        this.coords = [coords, []];
    }

    calcEquiretangular = () => {
        const coords = [];

        for(let star of this.stars) {
            const cart = equiretangularProjection(star);
            const id = star.id;

            coords.push({ id, ...cart });
        }

        this.coords = [coords, []];
    }

    onSizeChange = (e) => {
        const size = e.target.value;

		if(!size || size.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ size }));
    }

    onProjectionChange = (e) => {
        const projection = e.target.value;

        this.setState(() => ({ projection }));
        this.calcProjection(projection);
    }

    render() {
        const size = this.state.size ? parseInt(this.state.size) : 0;
        const second = this.state.projection == '0';

        return (
            <section>
                <header>GenerateMapPage</header>

                <main>
                    <div>
                        <label>Size</label>
                        <input
                            type="text"
                            value={ this.state.size }
                            onChange={ this.onSizeChange }
                        />
                        
                        <label>Projection</label>
                        <select
                                value={ this.state.projection }
                                onChange={ this.onProjectionChange }
                        >
                            <option value="0">Orthographic</option>
                            <option value="2">Equirectangular</option>
                        </select>
                    </div>

                    <div>
                        <Map
                            size={ size }
                            coords={ this.coords[0] }
                            type={ this.state.projection }
                        />

                        {
                            second && 
                            <Map
                                size={ size }
                                coords={ this.coords[1] }
                                type={ this.state.projection }
                            />
                        }
                    </div>
                </main>
            </section>
        )
    }

}


const mapStateToProps = (state) => ({
    stars: state.stars,
});


export default connect(mapStateToProps)(GenerateMapPage);