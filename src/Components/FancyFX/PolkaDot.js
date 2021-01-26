import React from 'react';

export function PolkaDot( { color } ) {
    const [ coords, setCoords ] = React.useState([ document.body.clientWidth*0.5, 200 ])
    
    React.useEffect(() => {
        randomizeCoords()
        setInterval(randomizeCoords, 5000)
    }, [ color ])
    
    function randomizeCoords() {
        let padding = 110;
        let endX = document.body.clientWidth - padding * 2
        let endY = document.body.clientHeight - padding * 2
        setCoords([ (Math.random() * endX) + padding, (Math.random() * endY) + padding ])
    }
    
    return (
        <div className={'polka-dot'}
             style={{ '--polkaColor' : color, '--coordX' : coords[0] + 'px', '--coordY' : coords[1] + 'px' }} />
    );
}

