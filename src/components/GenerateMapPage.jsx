import React from 'react';
import { connect } from 'react-redux';

import Map from './Map.jsx';
import {
    cartToSph,
    stereographicProjectionSph,
    orthographicProjection,
    polarToCart
} from '../backend/utils.js';


class GenerateMapPage extends React.Component {

    constructor(props) {
        super(props);

        let coordsN = [];
        let coordsS = []
        for(let i = 0; i < props.stars.length; i++) {
            const star = props.stars[i];
            const pos = {
                x: star.coordsX,
                y: star.coordsY,
                z: star.coordsZ,
            }
            const sph = cartToSph(pos);
            let cart = orthographicProjection(sph, { lon: 0, lat: Math.PI/2 });
            const id = star.id;
            if(cart) {
                coordsN.push({ ...cart, id });
            } else {
                cart = orthographicProjection(sph, { lon: 0, lat: -Math.PI/2 });
                coordsS.push({ ...cart, id });
            }
        }
        
        this.coordsN = coordsN;
        this.coordsS = coordsS;

        this.state = {
            size: "400",
        }
    }

    onSizeChange = (e) => {
        const size = e.target.value;

		if(!size || size.match(/^\d+(\.\d{0,3})?$/))
			this.setState(() => ({ size }));
    }

    render() {
        const size = this.state.size ? parseInt(this.state.size) : 0;
        return (
            <section>
                <header>
                    <h2>GenerateMapPage</h2>
                </header>

                <main>
                    <div>
                        <label>Size</label>
                        <input
                            type="text"
                            value={ this.state.size }
                            onChange={ this.onSizeChange }
                        />
                    </div>

                    <div>
                        <Map
                            size={ size }
                            coords={ this.coordsN }
                        />

                        <Map
                            size={ size }
                            coords={ this.coordsS }
                        />
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