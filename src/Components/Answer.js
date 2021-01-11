import React from 'react';

export function Answer({value, isAnswer, onClick, selected}) {
    return (
        <button
            className={'question-answer'+(selected? isAnswer? ' right-answer' : ' wrong-answer' : '')}
            onClick={onClick}
            disabled={selected}
        >
            {value? 'True' : 'False'}
        </button>
    );
}

