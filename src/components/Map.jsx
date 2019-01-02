import React from 'react';


class Map extends React.Component {

    render() {
        const border = (
            <circle
                cx='200' cy='200' r='200'
                stroke='black' strokeWidth='2' fill='white'
            />
        );

        let dots = [];
        this.props.coords.forEach(star => {
            console.log(star);

            dots.push((
                <circle
                    cx={ star.x * 200 + 200 } cy={ star.y * 200 + 200 } r='2'
                    fill='black' key={ `${star.x}${star.y}` }
                />
            ))
        });

        return (
            <svg height='410' width='410'>
                { border }
                { dots.map((d) => (d)) }
            </svg>
        )

    }
}

export default Map;