import React from 'react';

export function QuestionNav( { prevCallback, nextCallback, curQuestion, maxQuestion } ) {
    return (
        <div className={'question-nav'}>
            <button
                className={'nav-button'}
                onClick={prevCallback}
                disabled={curQuestion === 1}
            >
                {'<'}
            </button>
            <div className={'styled-div cur-question'}>
                {curQuestion} / {maxQuestion}
            </div>
            <button
                className={'nav-button'}
                onClick={nextCallback}
                disabled={curQuestion === maxQuestion}
            >
                {'>'}
            </button>
        </div>
    );
}

