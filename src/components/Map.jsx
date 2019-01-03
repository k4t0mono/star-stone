import React from 'react';

import { genId } from '../backend/utils.js';


class Map extends React.Component {

    render() {
        const radius = this.props.size / 2;
        const circle = this.props.type == '0';

        const borderC = (
            <circle
                cx={ radius } cy={ radius } r={ radius }
                stroke='black' strokeWidth='2' fill='white'
            />
        );
        const borderR = (
            <rect
                width={ this.props.size * 2 }
                height={ this.props.size }
                stroke='black'
                strokeWidth='2'
                fill='white'
            />
        )

        let dots = [];
        this.props.coords.forEach(star => {
            dots.push((
                <circle
                    cx={ star.x * radius + radius }
                    cy={ star.y * radius + radius }
                    r={ radius/100 }
                    fill='black'
                    key={ star.id }
                />
            ))
        });

        
        return (
            <svg
                    height={
                        circle ?
                        this.props.size + 10 :
                        this.props.size + 10
                    }

                    width={
                        circle ?
                        this.props.size + 10 :
                        this.props.size * 2 + 10
                    }
            >
                { circle ? borderC : borderR }
                { dots.map((d) => (d)) }
            </svg>
        )

    }
}

export default Map;