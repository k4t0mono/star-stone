import React from 'react';


const Map = (props) => {
    const size = props.size / 2;
    const eqrec = props.type == 1;
    
    const borderC = (
        <circle
            cx={ size } cy={ size } r={ size }
            stroke='black' strokeWidth='2' fill='white'
        />
    );

    const borderR = (
        <rect
            width={ props.size * 2 }
            height={ props.size }
            stroke='black'
            strokeWidth='2'
            fill='white'
        />
    )

    let dots = [];
    props.coords.forEach(star => {
        dots.push((
            <circle
                cx={ star.x * size + size * 2 }
                cy={ star.y * size + size }
                r={ size/100 }
                fill='black'
                key={ star.id }
            />
        ))
    });


    const width = eqrec ? props.size * 2 + 10 : props.size + 10;
    return (
        <svg
                height={ props.size + 10 }
                width={ width }
        >
            { eqrec ? borderR : borderC }
            { dots.map((d) => (d)) }
        </svg>
    )
}


export default Map;