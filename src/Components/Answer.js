import React from 'react';
import { ReactComponent as CheckSVG } from "../Assets/check.svg";
import { ReactComponent as CrossSVG } from "../Assets/cross.svg";

export function Answer( { value, isAnswer, onClick, answeredQ, showBadge } ) {
    return (
        <button
            className={'primary' + (answeredQ ? isAnswer ? ' right-answer' : ' wrong-answer' : '')}
            onClick={onClick}
            disabled={answeredQ}
        >
            {value}
            <Badge show={showBadge} symbol={isAnswer} />
        </button>
    );
}

function Badge( { show, symbol } ) {
    if (!show) {
        return <div className={'badge-container'}> </div>
    }
    
    if (symbol) {
        return <div className={'badge-container'}> <CheckSVG /> </div>
    }
    
    return <div className={'badge-container'}> <CrossSVG /> </div>
}
