import React from 'react';


class Map extends React.Component {

    render() {
        const radius = this.props.size / 2;

        const border = (
            <circle
                cx={ radius } cy={ radius } r={ radius }
                stroke='black' strokeWidth='2' fill='white'
            />
        );

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
                    height={ this.props.size + 10 }
                    width={ this.props.size + 10 }
            >
                { border }
                { dots.map((d) => (d)) }
            </svg>
        )

    }
}

export default Map;