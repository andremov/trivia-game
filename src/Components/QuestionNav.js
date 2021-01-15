import React, { useEffect, useState } from 'react';
import { ReactComponent as NextSVG } from "../Assets/next.svg";
import { ReactComponent as CheckSVG } from "../Assets/check.svg";

export function QuestionNav( { correctCount, maxQuestion, nextCallback, answeredQ } ) {
    const [ showAddFX, setAddFX ] = useState(false)
    
    useEffect(() => {
        if ( correctCount > 0 ) {
            setAddFX(true)
            setTimeout(() => setAddFX(false), 1000)
        }
    }, [ correctCount ])
    
    return (
        <div className={'question-footing'}>
            
            <div className={'question-info'}>
                <CheckSVG />
                <span>{correctCount + '/' + maxQuestion}</span>
                <AdditionAnimation showFX={showAddFX} />
            </div>
            
            <NavButton
                nextCallback={nextCallback}
                answeredQ={answeredQ}
            />
        
        </div>
    );
}

function AdditionAnimation( { showFX } ) {
    if ( !showFX ) {
        return <></>
    }
    
    return <div className={'addition-animation'}>
        +1
    </div>
}

function NavButton( { nextCallback, answeredQ } ) {
    return <button
        className={'nav-button'}
        onClick={nextCallback}
        disabled={!answeredQ}
    >
        <NextSVG />
    </button>
}
