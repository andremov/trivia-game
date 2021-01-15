import React, { useEffect, useState } from 'react';
import { ReactComponent as NextSVG } from "../Assets/next.svg";
import { ReactComponent as CheckSVG } from "../Assets/check.svg";

export function QuestionNav( { correctCount, maxQuestion, nextCallback, toResultsCallback } ) {
    const [ addition, setAddition ] = useState(false)
    
    useEffect(() => {
        if ( correctCount > 0 ) {
            setAddition(true)
            setTimeout(() => setAddition(false), 1000)
        }
    }, [ correctCount ])
    
    return (
        <div className={'question-footing'}>
            
            <div className={'question-info'}>
                <CheckSVG />
                <span>{correctCount + '/' + maxQuestion}</span>
                <AdditionAnimation show={addition} />
            </div>
            
            <button
                className={'nav-button'}
                onClick={nextCallback}
                disabled={toResultsCallback}
            >
                <NextSVG />
            </button>
            
        </div>
    );
}

function AdditionAnimation( { show } ) {
    if (!show) {
        return <></>
    }
    
    return <div className={'addition-animation'}>
        +1
    </div>
}
