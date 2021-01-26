import React, { useEffect, useState } from 'react';

export function Timer( { curQuestion, timeoutCallback, startTime } ) {
    const [ time, setTime ] = useState(startTime)
    const [ degs, setDegs ] = useState([ 90, -90 ])
    const [ colors, setColors ] = useState([ 'red', 'red' ])
    
    useEffect(() => {
        setTimeout(() => nextTick(startTime), 1000)
    }, [ curQuestion ])
    
    function nextTick( tick ) {
        setTime(tick - 1)
        let visTick = Math.max(tick-1,0)
        let deg;
        if ( visTick >= startTime * 0.5 ) {
            deg = 90 + (180 * visTick / (startTime * 0.5))
            console.log(deg)
        } else {
            deg = 90 + (180 * (visTick - (startTime * 0.5)) / (startTime * 0.5))
            console.log(deg)
        }
        setDegs([ deg, -90 ])
        setColors([ tick > startTime * 0.5 ? 'red' : 'white', 'red' ])
        if ( tick > 0 ) {
            setTimeout(() => nextTick(tick - 1), 1000)
        } else {
            timeoutCallback()
        }
    }
    
    return (
        <div
            className={'timer-bomb'}
            style={{
                '--angle1' : degs[0] + 'deg',
                '--angle2' : degs[1] + 'deg',
                '--color1' : colors[0],
                '--color2' : colors[1]
            }}
        >
            <div className={'timer-bkg'}>
                <span>{Math.max(time, 0)}</span>
            </div>
        </div>
    );
}

