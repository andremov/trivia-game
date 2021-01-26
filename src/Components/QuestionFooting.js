import React, { useEffect, useState } from 'react';
import { ReactComponent as NextSVG } from "../Assets/next.svg";
import { ReactComponent as CheckSVG } from "../Assets/check.svg";
import { ReactComponent as ResultsSVG } from "../Assets/results.svg";

export function QuestionFooting( { correctCount, maxQuestion, nextCallback, answeredQ, isLast } ) {
    const [ showAddFX, setAddFX ] = useState(false)
    
    useEffect(() => {
        if ( correctCount > 0 ) {
            setAddFX(true)
            setTimeout(() => setAddFX(false), 600)
        }
    }, [ correctCount ])
    
    return (
        <div className={'flex-1 flex-row'}>
            
            <div className={'question-info'}>
                <CheckSVG />
                <span>{correctCount + '/' + maxQuestion}</span>
                <AdditionAnimation showFX={showAddFX} />
            </div>
            
            <NavButton
                nextCallback={nextCallback}
                answeredQ={answeredQ}
                isLast={isLast}
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

function NavButton( { nextCallback, answeredQ, isLast } ) {
    return <button
        className={'nav-button'}
        onClick={nextCallback}
        disabled={!answeredQ}
    >
        {!isLast?
            <NextSVG /> :
            <ResultsSVG />
        }
    </button>
}
