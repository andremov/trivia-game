import React from 'react';

export function ResultItem( { correct, selected, index } ) {
    return (
        <div className={'result-item flex-row flex-1 '+(correct===selected? 'correct-answer':'wrong-answer')}>
            <div>
                {index+1}.
            </div>
            <div className={'flex-1'}>
                {correct}
            </div>
            <div className={'flex-1'}>
                {selected}
            </div>
        </div>
    );
}

