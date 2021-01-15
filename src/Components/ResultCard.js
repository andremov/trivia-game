import React from 'react';
import { ReactComponent as CheckSVG } from "../Assets/check.svg";
import { ReactComponent as NextSVG } from "../Assets/next.svg";

const remarks = ['You\'ll get it next time!','Nice try!', 'Well done!', 'Excellent!'];

export function ResultCard( { correctCount, maxQuestion, backCallback } ) {
    return (
        <div className={'question-card'}>
            
            <div className={'q-head'}>
                <div className={'question-counter'}/>
                
                <h3>{remarks[correctCount]}</h3>
            </div>
            
            <div className={'question-info'}>
                <CheckSVG />
                <span>{correctCount + '/' + maxQuestion}</span>
            </div>
            
            <div className={'q-foot'}>
                <button
                    className={'back-button'}
                    onClick={backCallback}
                >
                    <NextSVG />
                </button>
            </div>
            
        </div>
    );
}

