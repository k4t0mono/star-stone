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
            const pos = {
                x: props.stars[i].coordsX,
                y: props.stars[i].coordsY,
                z: props.stars[i].coordsZ,
            }
            const sph = cartToSph(pos);
            let cart = orthographicProjection(sph, { lon: 0, lat: Math.PI/2 });
            if(cart) {
                coordsN.push(cart);
            } else {
                cart = orthographicProjection(sph, { lon: 0, lat: -Math.PI/2 });
                coordsS.push(cart);
            }
        }
        
        this.coordsN = coordsN;
        this.coordsS = coordsS;
    }

    render() {
        return (
            <section>
                <header>GenerateMapPage</header>

                <main>
                    <Map coords={ this.coordsN } />
                    <Map coords={ this.coordsS } />
                </main>
            </section>
        )
    }

}


const mapStateToProps = (state) => ({
    stars: state.stars,
});


export default connect(mapStateToProps)(GenerateMapPage);