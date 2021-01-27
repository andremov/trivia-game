import React from 'react';
import { settings } from "../../Utils/Settings";

export function PolkaDot( { color } ) {
    const [ coords, setCoords ] = React.useState(
        [ Math.random() * document.body.clientWidth * 0.6 + 200, Math.random() * 600 ])
    const [ interval, addInterval ] = React.useState(undefined)
    
    React.useEffect(() => {
        
        function randomizeCoords() {
            let padding = 110;
            let endX = document.body.clientWidth - padding * 2
            let endY = document.body.clientHeight - padding * 2
            setCoords([ (Math.random() * endX) + padding, (Math.random() * endY) + padding ])
        }
        
        randomizeCoords()
        clearInterval(interval)
        addInterval(setInterval(randomizeCoords, settings.polkadot_movement_duration * 1000))
    }, [ color ])
    
    return (
        <div className={'polka-dot'}
             style={{
                 '--polkaColor' : color,
                 '--coordX' : coords[0] + 'px',
                 '--coordY' : coords[1] + 'px',
                 transition : settings.polkadot_movement_duration + '.5s ease-in-out top, ' +
                     settings.polkadot_movement_duration + '.5s ease-in-out left'
             }}
        />
    );
}

