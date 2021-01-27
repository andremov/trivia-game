import React, { useEffect, useState } from 'react';
import { settings } from "../Utils/Settings";

let timer;

export function Timer( { curQuestion, timeoutCallback, isOpen } ) {
    const red = '#bc371f';
    const [ time, setTime ] = useState(settings.timer_duration)
    const [ degs, setDegs ] = useState([ 90, -90 ])
    const [ colors, setColors ] = useState([ red, red ])
    
    useEffect(() => {
        
        function nextTick( tick ) {
        
            setTime(tick - 1)
            let visTick = Math.max(tick - 1, 0)
            let deg;
            if ( visTick >= settings.timer_duration * 0.5 ) {
                deg = 90 + (180 * visTick / (settings.timer_duration * 0.5))
            } else {
                deg = 90 + (180 * (visTick - (settings.timer_duration * 0.5)) / (settings.timer_duration * 0.5))
            }
            setDegs([ deg, -90 ])
            setColors([ tick - 1 >= settings.timer_duration * 0.5 ? red : 'white', red ])
        
            if ( tick - 1 > 0 ) {
                timer = setTimeout(() => nextTick(tick - 1), 1000)
            } else {
                timeoutCallback()
            }
        }
        
        setTime(settings.timer_duration + 1)
        clearTimeout(timer)
        nextTick(settings.timer_duration + 1)
    }, [ curQuestion, timeoutCallback ])
    
    useEffect(() => {
        if ( !isOpen ) {
            clearTimeout(timer)
        }
    }, [ isOpen ])
    
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

